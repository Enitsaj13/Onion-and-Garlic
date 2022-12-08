import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Alert } from 'react-native'

// authentication
GoogleSignin.configure({
  webClientId:
    '780619674479-06cdvatq36m7nt45a7hovmbs1e47bq.apps.googleusercontent.com',
});

const signIn = async (navigation, email, password) => {

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

const googleSignIn = async (setLoading, navigation) => {
  setLoading(true);
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const user = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);

    const isUserAlreadyExist = await checkUserIfExists(user.user?.email);
    if (!isUserAlreadyExist) {
      addUserToDatabase(
        user.user?.name,
        user.user?.email,
        user.user?.id,
        user.user?.password,
        user.user?.phone,
        user.user?.adress,
        user.user?.photo,
      );
    }

    auth().signInWithCredential(googleCredential);
    navigation.replace('BottomNavigator');
  } catch (err) {
    console.log(err.message);
  }
  setLoading(false);
};

const addUserToDatabase = async (name, email, id, password, photo, address, phone) => {
  try {
    await firestore()
      .collection('users')
      .doc(email)
      .set({
        email,
        id,
        name,
        photo,
        address,
        phone,
        password,
        favorites: [],
        foodLike: [],
        lastOrder: {foodList: true},
      });
  } catch (err) {
    console.log(err);
    alert(err)
  }
};

const checkUserIfExists = async email => {
  const user = await firestore()
    .collection('users')
    .where('email', '==', email)
    .get();

  let numberOfUser = 0;

  user.docs.forEach(() => {
    numberOfUser++;
  });

  return numberOfUser > 0;
};

const logoutUser = async navigation => {
  try {
    navigation.replace('Login');
    await auth().signOut();
    await GoogleSignin.signOut();
    await GoogleSignin.revokeAccess();
  } catch (error) {
    console.log(error.message);
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

// read
const getUser = async (name, setName) => {

  try {
    const user = await firestore()
      .collection('foods')
      .where('name', '==', name)
      .get();

    const tempDb = [];
    user.docs.forEach(food => {
      tempDb.push(food.data());
    });

    setName(tempDb);
  } catch (err) {
    console.log(err.message);
  }
};

const getNumberOfFavorites = async setNumberOfFavorites => {
  firestore()
    .collection('users')
    .doc(auth().currentUser?.email)
    .onSnapshot(
      user => {
        let numberOfFavorites = 0;
        user.data()?.favorites.forEach(() => {
          numberOfFavorites++;
        });
        setNumberOfFavorites(numberOfFavorites);
      },
      err => {
        console.log(err.message);
      },
    );
};


const checkFavorites = (foodName, setIsFavorite) => {
  firestore()
    .collection('users')
    .doc(auth().currentUser?.email)
    .onSnapshot(
      user => {
        const tempFood = [];
        user.data()?.favorites.forEach(async foodInfo => {
          tempFood.push(foodInfo.name);
        });
        if (tempFood.includes(foodName)) {
          setIsFavorite(true);
        }
      },
      err => {
        console.log(err.message);
      },
    );
};


const addToFavorites = async foods => {

  let getIndex;
  let alreadyFavorite = false;
  const tempFavorites = [];

  const currentFavorites = await firestore()
    .collection('users')
    .doc(auth().currentUser?.email)
    .get();

  const currFave = currentFavorites.data()?.favorites;
  currFave.forEach((item, index) => {
    if (item.name === foods.name) {
      alreadyFavorite = true;
      getIndex = index;
    }

    tempFavorites.push(item);
  });

  if (alreadyFavorite) {
    tempFavorites.splice(getIndex, 1);
    Alert.alert('Removed from your favorites!');
  } else {
    tempFavorites.push(foods);
    Alert.alert('Added to your favorites!');
  }

  await firestore()
    .collection('users')
    .doc(auth().currentUser?.email)
    .update({
      favorites: [...tempFavorites],
    })
    .catch(err => console.log(err.message));
};


// function for tracking the order food process
const trackingOrder = async (foodName, setOrderStatus) => {
  firestore()
    .collection('foods')
    .doc(foodName)
    .where('orderStatus', '==', 'Preparing')
    .onSnapshot(
      food => {
        setOrderStatus(food.data()?.orderStatus);
      },
      err => {
        console.log(err.message);
      },
    );
};





export {
  googleSignIn,
  addUserToDatabase,
  logoutUser,
  getNumberOfFavorites,
  checkFavorites,
  addToFavorites,
  facebookSignIn,
  getUser,
  trackingOrder,
  signIn
};
