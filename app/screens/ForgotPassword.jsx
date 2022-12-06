/* <-- dependencies --> */
import { useContext, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from 'theme'
import Icon from 'react-native-vector-icons/Ionicons'

/* <-- components --> */
import { LoginButton } from 'components/LandingButton'

/* <-- styles --> */
import styles from 'styles/login-registration'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

const ForgotPassword = ({ navigation }) => {
  
  /* <-- theme context --> */
  const THEME = useContext(ThemeContext)

  /* <-- show / hide password --> */
  const [showPassword, setShowPassword] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: `${THEME.background}` }}>
        <View style={styles.headerContainer}>
            <Text style={[styles.headerText, {color: `${THEME.text}`}]}> Forgot Password ?</Text>   

            <View>
                <Text style={[styles.subHeader, {color: `${THEME.text}`}]}>
                    No worries, we'll send you reset instructions.
                </Text>
            </View>
        </View>

        <View style={styles.inputContainer}>

        <Icon name="mail-outline" size={20} color={`${THEME.text}`}
              style={{
                    position: 'absolute',
                    left: 42,
                    top: 28,
                    zIndex: 1,
              }} 
        />

         <TextInput
            keyboardType='email-address'
            autoCapitalize="none"
            placeholder="Enter your email"
            placeholderTextColor={`${THEME.placeholder}`}
            textTextColor={`${THEME.text}`}
            style={[styles.inputTxt, {color: `${THEME.text}`,
            backgroundColor: `${THEME.border}`}]} 
          />

        </View>


        <TouchableOpacity
        style={{
          marginTop: 40,
          paddingHorizontal: SIZES.padding,
        }} activeOpacity={0.8}>

            <LoginButton onPress={() => navigation.navigate('ResetPassword')}title="Submit" />
             
        </TouchableOpacity>

        <View style={styles. backRegLoginCont}>

            <Text style={[styles.txtBackRegLog, { color: `${THEME.text}`}]}>Already have an account ? 
            </Text>

            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')}>

                <Text style={styles.btnRegLog}>Login</Text>

            </TouchableOpacity>
        </View>


    </SafeAreaView>
  )
}

export default ForgotPassword

