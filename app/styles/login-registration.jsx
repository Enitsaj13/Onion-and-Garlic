import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    headerText: {
        fontSize: SIZES.xl,
        lineHeight: 60,
        fontWeight: 'bold',

    },
    subHeader: {
        fontSize: SIZES.font,
    },
    inputContainer: {
        marginTop: 30,
        paddingHorizontal: SIZES.padding,
    },
    emailIcon: {
        position: 'absolute',
        top: 28,
        left: 40,
        zIndex: 1,
    },

    nameIcon: {
        position: 'absolute',
        top: 28,
        left: 40,
        zIndex: 1,
    },

    emailIconReg: {
        position: 'absolute',
        top: 92,
        left: 40,
        zIndex: 1,
    },

    inputTxt: {
        marginTop: 14,
        height: 50,
        borderRadius: 10,
        fontSize: SIZES.font,
        paddingLeft: 42,
        letterSpacing: 0.8,
        // borderWidth: 2,
        // borderColor: COLORS.secondary,

    },
    passIcon: {
        position: 'absolute',
        top: 91,
        left: 40,
        zIndex: 1,
    },
    phoneIconReg: {
        position: 'absolute',
        top: 220,
        left: 42,
        zIndex: 1,
    },
    addIconReg: {
        position: 'absolute',
        top: 283,
        left: 42,
        zIndex: 1,
    },

    passIconReg: {
        position: 'absolute',
        top: 155,
        left: 40,
        zIndex: 1,
    },

    showPassIcon: {
        position: 'absolute',
        top: 30,
        right: 15,
        zIndex: 1,
    },

    showPassIconReg: {
        position: 'absolute',
        top: 157,
        right: 45,
        zIndex: 1,
    },

    forgotText: {
        color: COLORS.primary,
        fontSize: SIZES.font,
        textAlign: 'right',
        marginTop: 15,
    },
    loginBtnContainer: {
        marginTop: 40,
        paddingHorizontal: SIZES.padding,
    },
    contText: {
        fontSize: SIZES.font,
        
    },
    socialContainer: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
    },
    socialBtn: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 14,
    },
    socialTxt: {
        fontSize: SIZES.font,
        
    },

    socialImg: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    termsContainer: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    agreeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    agreementTxt: {
        fontSize: SIZES.small,
        textAlign: 'center',
        marginBottom: 5,
    },
    termsTxt: {
        color: COLORS.primary,
        fontSize: SIZES.small,
        textAlign: 'center',
        marginBottom: 100,
        marginHorizontal: 1,
    },

    backRegLoginCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    txtBackRegLog: {
        fontSize: SIZES.font,
        textAlign: 'center',
        marginHorizontal: 3,
    },
    btnRegLog: {
        color: COLORS.primary,
        fontSize: SIZES.font,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    // loading spinner
    loading: {
        position: 'absolute',
        top: 15,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 1,
        fontSize: 20,
    }

})

export default styles

