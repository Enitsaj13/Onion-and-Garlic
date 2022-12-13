import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import firestore from '@react-native-firebase/firestore'

    /* <-- google key id --> */
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
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Login Failed', 'That email address is invalid!')
        } else if (error.code === 'auth/user-disabled') {
          Alert.alert('Login Failed', 'That email address is disabled!')
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert('Login Failed', 'That email address is not found!')
        } else if (error.code === 'auth/wrong-password') { 
          Alert.alert('Login Failed', 'That password is incorrect!')
        } else {
          Alert.alert('Login Failed', error.message)
        }
      }
      , 1500);
    }
  }


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
          Alert.alert('Google Sign In Failed', 'Play Services Not Available or Outdated')
        } else {
          Alert.alert('Google Sign In Failed', error.message)
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

      /* <-- regex validations --> */
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
                navigation.replace('Login')
                console.log('User signed out!')
              } catch (error) {
                console.log(error)
                Alert.alert('Error', 'Something went wrong!')
              }
            },
          },
        ],
        { cancelable: false },
      )
    }

    /* <-- read the food data --> */
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

    /* <-- add to cart --> */
    const addToCart = async (data, setCart) => {
      try {
        const cart = await firestore()
          .collection('cart')
          .add(data)
        setCart([...cart, data])
      } catch (error) {
        console.log(error)
      }
    }

    /* <-- get the cart --> */
    const getCart = async (setCart) => {
      try {
        const cart = await firestore()
          .collection('cart')
          .get()

        const tempDb = [];
        cart.forEach(doc => {
          tempDb.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setCart(tempDb)
      } catch (error) {
        console.log(error)
      }
    }

    /* <-- get the logged in user data --> */
    const getLoggedInUser = async (setUser) => {
      try {
        const user = await firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .get()

        setUser(user.data())
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
  getUser,
  addToCart,
  getCart,
  getLoggedInUser
}








  



