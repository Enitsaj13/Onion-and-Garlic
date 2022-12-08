import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import firestore from '@react-native-firebase/firestore'

  
    GoogleSignin.configure({
      webClientId: '8823493165-j5rvg757i3g2qv9cu5mgpeaqu4eaop8h.apps.googleusercontent.com',
    });

  /* <-- login functions --> */
  const signIn = async ( navigation, email, password ) => {

    if (email === '' || password === '') {
      Alert.alert('Login Failed', 'Please enter your email and password')
      return
    }
  
    try {
      await auth().signInWithEmailAndPassword(email, password)
      setTimeout(() => {
        console.log(`Welcome ${email}`)
        navigation.replace('Otp')
      }
      , 1500);

    } catch (error) {
      setTimeout(() => {

        /* <-- error codes --> */ 
        const errorCodes = {
          'auth/invalid-email': 'Please enter a valid email address',
          'auth/user-disabled': 'Your account has been disabled',
          'auth/user-not-found': 'User not found',
          'auth/wrong-password': 'Wrong password'
        }
        const errorMessage = errorCodes[error.code]
        Alert.alert('Login Failed', errorMessage)
      }, 1500); 
    }
  };


  /* <-- google sign in --> */
  const googleSignIn = async navigation => {

      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
        setTimeout(() => {
            Alert.alert(
              'Google Sign In Success',
              `Welcome ${userInfo.user.name}`,
              [
                { text: 'OK', onPress: () => navigation.replace('BottomNavigator') }
              ],
              { cancelable: false }
            );

            console.log(`Welcome ${userInfo.user.name}`)
          }
        , 2000);
      }

      catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('User Cancelled the Login Flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('Signing In');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('Google Play Services Not Available')
        } else {
          alert('Something went wrong')
        }
      }
       
    };


  /* <-- facebook sign in --> */
  const facebookSignIn = async navigation => {

      try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          throw 'Something went wrong obtaining access token';
        } 
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        const userCredential = await auth().signInWithCredential(facebookCredential);
        console.log(userCredential);

        /* <-- alert welcome --> */
        Alert.alert(
          'Facebook Sign In Success',
          `Welcome ${userCredential.user.displayName}`,
          [
            { text: 'OK', onPress: () => navigation.replace('BottomNavigator') }
          ],
          { cancelable: false }
        );

        console.log('Facebook Sign In Success')
    
      } catch (error) {
        console.log(error);
      }
    }


    /* <-- add user to firestore db --> */
  const addUser = async ( navigation, dataState ) => {

        /* <-- user --> */
      const userAuthentic = auth()

      const nameRegex = /^[a-zA-Z ]{2,30}$/

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

      const phoneRegex = /^^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/


      if (!dataState.name || !dataState.email || !dataState.password || !dataState.phone || !dataState.address) {
        Alert.alert('Error', 'Please fill all fields')
        return
      } 
      else if (!nameRegex.test(dataState.name) || dataState.name.length < 3) {
        Alert.alert('Error', 'Please enter a valid name')
        return

      } else if (!emailRegex.test(dataState.email)) {
        Alert.alert('Error', 'Please enter a valid email')
        return
        
      } else if (!phoneRegex.test(dataState.phone)) {
        Alert.alert('Error', 'Please enter a valid phone number')
        return

      } else {

        try {
          await userAuthentic.createUserWithEmailAndPassword(dataState.email, dataState.password)
          await firestore().collection('users').doc(userAuthentic.currentUser.uid).set({
            name: dataState.name,
            email: dataState.email,
            password: dataState.password,
            phone: dataState.phone,
            address: dataState.address,
            createdAt: firestore.Timestamp.fromDate(new Date()),
          
          })
          navigation.replace('EmailVerification')
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Error', 'That email address is already in use!')
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('Error', 'That email address is invalid!')
          } else if (error.code === 'auth/weak-password') {
            Alert.alert('Error', 'Password should be at least 6 characters')
          } else {
            Alert.alert('Error', 'Something went wrong!')
          }
        }
      }
  }


    /* <-- logout handler --> */
  const logOut = async navigation => {

      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'default',
          },
          { text: 'OK',
            style: 'destructive',
            onPress: () => {
              try {
                auth().currentUser && auth().signOut()
                GoogleSignin.signOut()
                navigation.replace('Landing')
                console.log('User signed out!')
              } catch (error) {
                console.log(error)
                alert('Something went wrong!')
              }
            },
          },
        ],
        { cancelable: false },
      )
    }

    /* <-- read --> */
    const getFoodData = async (category, setFoodData) => {
      try {
        const foodData = await firestore()
        .collection('food')
        .where('category', '==', category)
        .get()

      const tempDb = [];
      foodData.forEach(doc => {
        tempDb.push({ 
          id: doc.id,
          ...doc.data()
        })
      })
      setFoodData(tempDb)
      } catch (error) {
        console.log(error)
      }
    }

    const getUser = async (setUser) => {
      try {
        const list = [];

        await firestore()
        .collection('users')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(doc => {
            const { name, email, phone, address } = doc.data();
            list.push({
              id: doc.id,
              name,
              email,
              phone,
              address
            })
          })
        })
        setUser(list)
      } catch (error) {
        console.log(error)
      }
    }


      


  
export { 
  signIn, 
  googleSignIn, 
  facebookSignIn, 
  addUser, 
  logOut, 
  getFoodData,
  getUser
}








  



