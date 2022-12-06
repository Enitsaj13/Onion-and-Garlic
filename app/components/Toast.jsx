/* <-- dependencies--> */
import { useState, useContext } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'
import Icon from 'react-native-vector-icons/Ionicons'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/details'

export const ToastMessage = () => {
  /* <-- state for pressing heart --> */
  const [isPressed, setIsPressed] = useState(false)
  const handlerHeart = () => setIsPressed((prevState) => !prevState)

  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  /* <-- toast added to favorite and removed  --> */
  const toastMessage = () => {
    Toast.show({
      type: isPressed ? 'error' : 'success',
      position: 'top',
      text1: isPressed ? 'Removed from favorite! 🥹' : 'Added to favorite! 😍',
      visibilityTime: 3000,
    })

    handlerHeart()
  }

  return (
    <>
      <View
        style={[ styles.iconContainer, 
        { backgroundColor: THEME.card, borderColor: THEME.card }]}>
        <TouchableOpacity onPress={() => {toastMessage()}}>
          <Icon style={styles.heart}
            name={isPressed ? 'ios-heart' : 'ios-heart-outline'}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}
