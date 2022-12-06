import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'

const styles = StyleSheet.create({
  primaryTitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: '600',
  },
  primaryBtnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondayTitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    paddingLeft: 20,
  },
  secondayBtnContainer: {
    backgroundColor: COLORS.primary,
    borderWidth: 0.2,
    borderColor: COLORS.dark,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    color: COLORS.white,
    fontSize: SIZES.name,
    fontWeight: '600',
  },
  loginBtnContainer: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
})

export default styles
