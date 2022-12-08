/* <-- dependencies --> */
import { useContext, useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator, StyleSheet, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Phone from 'react-native-vector-icons/AntDesign'

/* <-- backend function --> */
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


/* <-- components --> */
import { BackButton } from 'components/BackButton'

/* <-- styles --> */
import styles from 'styles/login-registration'
import { COLORS } from 'theme'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'


const Login = () => {

  /* <-- navigator --> */
  const navigation = useNavigation()

  /* <-- theme context --> */
  const THEME = useContext(ThemeContext)

  const uid = auth().currentUser?.uid;
  
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
    <SafeAreaView style={{ flex: 1, backgroundColor: `${THEME.background}` }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: `${THEME.background}`
      }}>
        <BackButton navigation={navigation} />
        <Text style={{
          color: `${THEME.text}`,
          fontSize: 18,
          fontWeight: '500',
        }}>Edit Profile</Text>

        <TouchableOpacity
           onPress={() => Alert.alert('Profile updated')}
           style={{
           padding: 2,
           borderRadius: 10,
           borderWidth: 1,
           borderColor: THEME.card,
           backgroundColor: THEME.card,
           bottom: 1,
        }}>
          <Icon name="checkmark-outline" size={30} color={`${COLORS.primary}`} />
        </TouchableOpacity>
        </View>


  

        {/* picture container round*/}
        <View style={{
          alignItems: 'center',
          marginTop: 80,
        }}>
          <View style={{
            width: 140,
            height: 140,
            borderRadius: 100,
            backgroundColor: `${THEME.border}`,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

            <TouchableOpacity 
            style={{
              backgroundColor: COLORS.black,
              zIndex: 1,
              borderWidth: 1,
              borderColor: `${THEME.border}`,     
            }}
            >
              <Icon name="camera" size={30} color={`${THEME.text}`}
              style={{
                position: 'absolute',
                top: 100,
                left: -12,
                zIndex: 1,
              }} />
            </TouchableOpacity>
            <Image 
            source={require('assets/images/user/profile.jpeg')}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
            }} />
           
          </View>

        </View>

        <Text style={{
          color: `${THEME.text}`,
          fontSize: 18,
          fontWeight: '500',
          marginLeft: 20,
          marginTop: 30, 
          paddingHorizontal: 10,   
          paddingVertical: 10,
          top: 20,    
        }}>
          Your Information
        </Text>

      <View style={styles.inputContainer}>

        <Icon name="person-outline" size={20} color={`${THEME.text}`}
        style={styles.emailIcon} />

        <TextInput
          value={user?.name}
          placeholder="Full Name"
          placeholderTextColor={`${THEME.placeholder}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`, marginVertical: 6,
        }]} />

        <Icon name="mail-outline" size={20} color={`${THEME.text}`}
        style={{
          position: 'absolute',
          top: 100,
          left: 40,
          zIndex: 1,
        }} />
        <TextInput
          value={user?.email}
          keyboardType='email-address'
          placeholder="Email"
          placeholderTextColor={`${THEME.placeholder}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`, marginVertical: 6,
        }]} />


      <Phone name="phone" size={20} color={`${THEME.text}`} 
        style={{
          position: 'absolute',
          top: 168,
          left: 40,
          zIndex: 1,
        }} />      
        
        <TextInput
          value={user?.phone}
          keyboardType='phone-pad'
          placeholder="Phone Number"
          placeholderTextColor={`${THEME.placeholder}`}
          textTextColor={`${THEME.text}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`, marginVertical: 6,
        }]} />

        <TextInput
          value={user?.address}
          placeholder="Address"
          placeholderTextColor={`${THEME.placeholder}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />

          <Icon name="location-outline" size={20} color={`${THEME.text}`}
          style={{
            position: 'absolute',
            top: 238,
            left: 40,
            zIndex: 1,
          }}
            
            />
     

        </View>


    </SafeAreaView>
  )
}




export default Login

