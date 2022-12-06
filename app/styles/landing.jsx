import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'


const styles = StyleSheet.create({
    image: {
        width: 360,
        height: 360,
    },
    text: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: SIZES.medium,
        bottom: 60
    },
    title: {
        fontSize: SIZES.xxl,
        color: COLORS.white,
        textAlign: 'center',
        top: 60
    },
})


export default styles