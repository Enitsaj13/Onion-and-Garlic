import { StyleSheet } from 'react-native'


import { COLORS, SIZES } from 'theme'

const styles = StyleSheet.create({

    // back button
    backContainer: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 1,
    },

    otpContainer: {
        flex: 1,
        padding: SIZES.padding,
    },
    lockedContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: COLORS.redLight,
        borderRadius: 60,
        height: 120,
        width: 120,
        borderWidth: 1,
    },
    lockedBg: {
        backgroundColor: COLORS.redLight,
        borderRadius: 60,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding,
    },
    otpTitle: {
        fontSize: SIZES.xxl,
        fontWeight: '800',
        color: COLORS.black,
    },
    otpText: {
        fontSize: SIZES.name,
        color: COLORS.font,
        textAlign: 'center',
        marginTop: SIZES.padding,
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding,
    },
    // input otp
    underlineStyleBase: {
        borderRadius: 14,
        height: 50,
        width: 50,
        fontSize: SIZES.name,
        fontWeight: 'bold',
        marginHorizontal: 10,
        borderWidth: 1,
        
    },
    underlineStyleHighLighted: {
        borderColor: COLORS.primary,
        borderWidth: 2,
    },
    submitContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 34,
    },
    btnVerify: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtVerify: {
        fontSize: SIZES.name,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    // resend code
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding,
    },
    resendText: {
        fontSize: SIZES.name,
        color: COLORS.font,
    },



})





export default styles