/* <-- dependencies --> */
import { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Fontisto'
import OTPInputView from '@twotalltotems/react-native-otp-input'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS } from 'theme'

/* <-- component --> */
import { BackButton } from 'components/BackButton'

/* <-- styles --> */
import styles from 'styles/verification'

const Otp = ({ navigation }) => {

    /* <-- theme state --> */
  const THEME = useContext(ThemeContext)
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>

        <View style={styles.backContainer}>
            <BackButton navigation={navigation} />
        </View>

        <View style={styles.otpContainer}>
            <View style={[styles.lockedContainer, {backgroundColor: `${THEME.card}`}]}>
                <View style={styles.lockedBg}>
                    <Icon name='locked' size={24} color={`${COLORS.red}`} />
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.otpTitle, {color: `${THEME.text}`}]}>Personal Identity </Text>
                <Text style={[styles.otpText, {color: `${THEME.text}`}]}>We have sent OTP code to your phone number </Text>
            </View>

            <View style={styles.inputContainer}>
                <OTPInputView 
                    style={{width: '80%', height: 80,}}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputFieldStyle={[styles.underlineStyleBase, {backgroundColor: THEME.card, color: THEME.text}]}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />
            </View>

            <View style={styles.resendContainer}>

                <Text>
                    <Text style={[styles.resendText, {color: `${THEME.text}`}]}>Didn't receive the code? </Text>
                </Text>

                <TouchableOpacity>
                    <Text style={[styles.resendText, {color: `${COLORS.primary}`}]}>Resend Code</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.submitContainer}>
                <TouchableOpacity style={styles.btnVerify} activeOpacity={0.8} onPress={() => navigation.navigate('BottomNavigator')}>  

                    <Text style={[styles.txtVerify, {color: `${COLORS.white}`}]}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
        
    </SafeAreaView>
  )
}

export default Otp

