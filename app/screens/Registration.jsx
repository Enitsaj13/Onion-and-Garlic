/* <-- dependencies --> */
import { useContext, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from 'theme'
import Icon from 'react-native-vector-icons/Ionicons'
import Phone from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

/* <-- authentication firebase --> */
import { addUser } from 'backend/firebase-config'

/* <-- components --> */
import { LoginButton } from 'components/LandingButton'

/* <-- styles --> */
import styles from 'styles/login-registration'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

const Login = () => {

  /* <-- navigator --> */
  const navigation = useNavigation()
  
  /* <-- theme context --> */
  const THEME = useContext(ThemeContext)

  /* <-- show / hide password --> */
  const [showPassword, setShowPassword] = useState(false)

  const [dataState, setDataState] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  })


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: `${THEME.background}` }}>
      <View style={styles.headerContainer}>

      <Text style={[styles.headerText, {color: `${THEME.text}`}]}>Registration</Text>

        <View>
            <Text style={[styles.subHeader, {color: `${THEME.text}`}]}>
                Please register down below
            </Text>
          </View>
        </View>

        <View style={styles.inputContainer}>

          <Icon name="person-outline" size={20} color={`${THEME.text}`}
              style={styles.nameIcon} />

        <TextInput
          value={dataState.name}
          onChangeText={(name) => setDataState({ ...dataState, name })}
          placeholder="Full name"
          placeholderTextColor={`${THEME.placeholder}`}
          textTextColor={`${THEME.text}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />

            <Icon name="mail-outline" size={20} color={`${THEME.text}`}
              style={styles.emailIconReg} />

         <TextInput
          value={dataState.email}
          onChangeText={(email) => setDataState({ ...dataState, email })}
          keyboardType='email-address'
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor={`${THEME.placeholder}`}
          textTextColor={`${THEME.text}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />

          <Icon name="lock-closed-outline" size={20} color={`${THEME.text}`}
              style={styles.passIconReg} />

        <TextInput
          value={dataState.password}
          onChangeText={(password) => setDataState({ ...dataState, password })}
          maxLength={22}
          placeholder="Password"
          secureTextEntry={!showPassword}
          placeholderTextColor={`${THEME.placeholder}`}
          textTextColor={`${THEME.text}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />

        <Icon 
        onPress={() => setShowPassword(!showPassword)}
        name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} 
        color={`${THEME.text}`}
        style={styles.showPassIconReg} />

        <Phone name="phone" size={20} color={`${THEME.text}`}
              style={styles.phoneIconReg} />

        <TextInput
          value={dataState.phone}
          onChangeText={(phone) => setDataState({ ...dataState, phone })}
          keyboardType='phone-pad'
          placeholder="Phone Number"
          placeholderTextColor={`${THEME.placeholder}`}
          textTextColor={`${THEME.text}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />
        
        <Icon name="location-outline" size={21} color={`${THEME.text}`}
              style={styles.addIconReg} />

        <TextInput
          value={dataState.address}
          onChangeText={(address) => setDataState({ ...dataState, address })}
           placeholder="Address"
          placeholderTextColor={`${THEME.placeholder}`}
          textTextColor={`${THEME.text}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />


        </View>

        <TouchableOpacity style={{
          marginTop: 40,
          paddingHorizontal: SIZES.padding,
        }} activeOpacity={0.8}>


          <LoginButton title="Register" 
          onPress={() => addUser(navigation, dataState)}
          />
             
          
        </TouchableOpacity>


          <View style={styles.termsContainer}>

            <Text
              style={[styles.agreementTxt, {color: `${THEME.text}`}]}> 
                By registration up, you agree to our 
              </Text>
              <View style={styles.agreeContainer}>

                <Text style={styles.termsTxt}>Terms of Service </Text>

                <Text style={[styles.termsTxt, {color: `${THEME.text}`}]}> and</Text>

                <Text style={styles.termsTxt}> Privacy Policy</Text>

              </View>
            </View>

              <View style={styles. backRegLoginCont}>
              <Text style={[styles.txtBackRegLog, { color: `${THEME.text}`
              }]}>Already have an account ? </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnRegLog}>Login</Text>
              </TouchableOpacity>

          </View>

    </SafeAreaView>
  )
}

export default Login

