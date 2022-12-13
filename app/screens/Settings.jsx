/* <-- dependencies --> */
import { useState, useContext, useEffect } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Arrow from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { EventRegister } from 'react-native-event-listeners'
import { useNavigation } from '@react-navigation/native'

/* <-- logout authentication --> */
import { logOut } from 'backend/firebase-config'
import auth from '@react-native-firebase/auth'

/* <-- backend function --> */
import firestore from '@react-native-firebase/firestore'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS } from 'theme'

/* <-- styles --> */
import styles from 'styles/settings'

const Settings = () => {

  /* <-- navigator --> */
  const navigation = useNavigation()

 const avatar = auth().currentUser?.photoURL;
  const displayName = auth().currentUser?.displayName;
  const email = auth().currentUser?.email;

  /* <-- theme context --> */
  const THEME = useContext(ThemeContext)
  const [mode, setMode] = useState(false)


  /* <-- switch toggle --> */
  const switchHandler = (value) => {
    setMode(value)
    EventRegister.emit('themeChanged', value)
  }


  /* <-- user data --> */
  const uid = auth().currentUser?.uid;
  
  const [user, setUser] = useState(null)


  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot(documentSnapshot => {
        setUser(documentSnapshot.data());
      });

     /* stop listening for updates when no longer required */
    return () => subscriber();
  }, []);


  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
      <View style={{ paddingHorizontal: 20, }}>
        <View style={styles.accHeader}>
          <Text style={[styles.accountText, { color: `${THEME.text}` }]}>
            Account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.dotsContainer}>
            <Icon name='dots-vertical' size={30} color={`${THEME.text}`} style={styles.dots}/>
          </TouchableOpacity>
        </View>
        <View style={styles.accountContainer}>

          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image
              style={styles.accountImg}
              source={require('assets/images/user/profile.jpeg')}
            />
          </TouchableOpacity>

          <View style={styles.accountTextContainer}>
            <Text style={[styles.accountName, { color: `${THEME.text}` }]}>
                {/* <-- display name of logged in user --> */}
              {displayName ? displayName : user?.name} 
            </Text>

            <Text style={[styles.accountSubName, { color: `${THEME.text}` }]}>
                {/* display the email of logged in user */}
              {email ? email : user?.email}
            </Text>
          </View>

        </View>

        <View>
          <Text style={[styles.settingsText, { color: `${THEME.text}` }]}>
            Settings
          </Text>
        </View>

        <View style={styles.settingsContainer}>
          <View style={[ styles.languageContainer,
              { backgroundColor: `${COLORS.violetLight}` }]}>

            <Entypo name='globe' size={22} color={`${THEME.globe}`} />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Language
            </Text>

            <Text style={[styles.language, { color: `${THEME.text}` }]}>
              English
            </Text>

            <TouchableOpacity style={styles.arrow}>
              <Arrow name='chevron-right' size={30} color={`${THEME.text}`} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.notificationContainer}>
          <View style={styles.iconBell}>
            <Icon name='bell' size={24} color={COLORS.blue} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Notifications
            </Text>

            <TouchableOpacity style={styles.arrow}>
              <Arrow name='chevron-right' size={30} color={`${THEME.text}`} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.darkmodeContainer}>
          <View style={[styles.darkMode, { backgroundColor: THEME.darkmode }]}>
            <Ionicons
              name={mode ? 'moon' : 'sunny'}
              size={22}
              color={`${THEME.darkIcon}`}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Dark Mode
            </Text>

            <Text style={[styles.onOff, { color: `${THEME.text}` }]}>
              {`${mode === true ? 'On' : 'Off'}`}
            </Text>

            <View style={{ left: 108, top: 8 }}>
              <Switch
                trackColor={{ false: COLORS.light, true: COLORS.violet }}
                thumbColor={`${THEME.switch}`}
                value={mode}
                onValueChange={switchHandler}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Faq')} style={styles.helpContainer}>
          <View
            style={{ backgroundColor: COLORS.greenLight, borderRadius: 40, padding: 14 }}>
            <Ionicons name='help-buoy' size={24} color={COLORS.green} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Help Center
            </Text>

            <View style={styles.arrow}>
              <Arrow name='chevron-right' size={30} color={`${THEME.text}`} />
            </View>
          </View>
        </TouchableOpacity>

          
        <TouchableOpacity style={styles.logoutContainer} 
        onPress={() => logOut(navigation)}>
        
          <View 
            style={{ backgroundColor: COLORS.redLight, borderRadius: 40, padding: 14}}>
            <Ionicons name='log-out-outline' size={24} color={COLORS.red} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


export default Settings



