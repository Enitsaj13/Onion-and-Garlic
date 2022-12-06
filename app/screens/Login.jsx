/* <-- dependencies --> */
import { useContext, useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

/* <-- authentication firebase --> */
import { signIn, googleSignIn, facebookSignIn } from 'backend/firebase-config'

/* <-- images --> */
import FbIcon from 'assets/images/icons/facebook.png'
import GoogleIcon from 'assets/images/icons/google.png'

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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /* <-- loading --> */
  const [loading, setLoading] = useState(false);
 
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }; 


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: `${THEME.background}` }}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, {color: `${THEME.text}`}]}>Welcome Back!
        </Text>
        <View>
          <Text style={[styles.subHeader, {color: `${THEME.text}`}]}>
              Please login to your account 
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} color={`${THEME.text}`}
        style={styles.emailIcon} />
        <TextInput
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          placeholderTextColor={`${THEME.placeholder}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />

        <Icon name="lock-closed-outline" size={20} color={`${THEME.text}`} 
        style={styles.passIcon} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        
        
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          maxLength={22}
          secureTextEntry={!showPassword}
          placeholder="Password"
          placeholderTextColor={`${THEME.placeholder}`}
          style={[styles.inputTxt, {color: `${THEME.text}`,
          backgroundColor: `${THEME.border}`}]} />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.showPassIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={`${THEME.text}`} />
        </TouchableOpacity>

      
        
      </KeyboardAvoidingView>
    
        <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotText}>Forgot  Password?</Text>

        </View>

        <TouchableOpacity style={styles.loginBtnContainer}>

        {loading && <ActivityIndicator 
          visible={loading}
          style={styles.loading}
          size="small"
          color="#fff"
           />}
      
        <LoginButton 
          onPress={
            () => {
              startLoading()
              signIn( navigation, email, password)
          }
        }
          title={loading ? '' : 'Login'}
        />
          
        </TouchableOpacity>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={[styles.contText, { color: `${THEME.text}`}]}>Or continue with</Text>
        </View>

        <View style={styles.socialContainer}>
          
          <TouchableOpacity
          onPress={() => facebookSignIn(navigation)}
          activeOpacity={0.6} style={[styles.socialBtn, 
          {backgroundColor: `${THEME.border}`}]}>
          
            <Image source={FbIcon} style={styles.socialImg} />
              <Text style={[styles.socialTxt, {color: `${THEME.text}`}]}>Facebook</Text>

          </TouchableOpacity>

          <TouchableOpacity    
            onPress={() => googleSignIn(navigation)}
            activeOpacity={0.6}
            style={[styles.socialBtn, {backgroundColor: `${THEME.border}`}]} >
            <Image source={GoogleIcon} style={styles.socialImg} />
            
            <Text
            style={[styles.socialTxt, {color: `${THEME.text}`}]} >
             Google
            </Text>

          </TouchableOpacity>
          </View>

          <View style={styles.termsContainer}>

            <Text
            style={[styles.agreementTxt, {color: `${THEME.text}`}]}> 
              By signing up, you agree to our 
            </Text>

          <View style={styles.agreeContainer}>


            <Text style={styles.termsTxt}>Terms of Service </Text>

            <Text style={[styles.termsTxt, {color: `${THEME.text}`}]}> and</Text>

            <Text style={styles.termsTxt}> Privacy Policy</Text>

            </View>

          </View>

            <View style={styles. backRegLoginCont}>

            <Text style={[styles.txtBackRegLog, { color: `${THEME.text}`
            }]}>Don't have an account? </Text>

            <TouchableOpacity activeOpacity={0.8}

                onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.btnRegLog}>Register</Text>

            </TouchableOpacity>

          </View>

    </SafeAreaView>
  )
}

export default Login

