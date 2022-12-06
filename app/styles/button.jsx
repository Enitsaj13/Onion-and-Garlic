import { StyleSheet } from 'react-native'
import { SIZES } from 'constants'

const styles = StyleSheet.create({
  text_button: {
    color: '#37bffa',
    textAlign: 'center',
    fontSize: SIZES.large,
  },
  btn_container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 30,
    height: 60,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 80,
    marginTop: 480,
  },
})

export default styles
