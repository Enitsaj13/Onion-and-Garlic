import { StyleSheet } from 'react-native'
import { COLORS } from 'constants'

const styles = StyleSheet.create({
  searchBtnContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    elevation: 5,
  },
})

export default styles
