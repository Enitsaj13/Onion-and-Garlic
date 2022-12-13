/* <-- dependencies --> */
import { useContext, useEffect, useState } from 'react'
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- auth --> */
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

/* <-- constants --> */
import { CAROUSELData } from 'constants'

/* <-- styles --> */
import styles from 'styles/home'

/* <-- components --> */
import SearchRecipe from 'components/Search'
import Carousel from 'components/Carousel'

const HomeScreen = ({ navigation, item }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

 /* <-- user data --> */
 const uid = auth().currentUser?.uid;
 
 const displayName = auth().currentUser?.displayName;
  
 const [user, setUser] = useState(null)


 useEffect(() => {
   const subscriber = firestore()
     .collection('users')
     .doc(uid)
     .onSnapshot(documentSnapshot => {
       setUser(documentSnapshot.data());
     });

   // Stop listening for updates when no longer required
   return () => subscriber();
 }, []);

  return (
    <SafeAreaView
      style={[styles.mainSection, { backgroundColor: THEME.background }]}
    >
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.greet, { color: THEME.text }]}>Hello,</Text>
          
             <Text style={[styles.user, { color: THEME.text }]}>
              
              {/* <-- display first name using split method --> */}
              {displayName ? displayName.split(' ')[0] : user?.name.split(' ')[0]} 👋
                            
            </Text>
             
          </View>
          <Text style={styles.asking}>What would you like to order ?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image
            source={require('assets/images/user/profile.jpeg')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      {/* <-- invoked the search component -->  */}
      <SearchRecipe navigation={navigation} />
      {/* <---------------------------------->  */}

      <View style={styles.recommendationContainer}>
        <Text style={[styles.recommendationTitle,
          { color: THEME.text }]}>Recommendation</Text>
        <Pressable onPress={() => navigation.navigate('MenuScreen', item)}>
          <Text style={styles.viewAll}>View all</Text>
        </Pressable>
      </View>

      <View
        style={{
          paddingTop: 30,
        }}
      >
        {/* <-- invoked carousel -->  */}
        <Carousel data={CAROUSELData} autoPlay={false} />
        {/* <---------------------------------->  */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
