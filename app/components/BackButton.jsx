/* <-- dependencies --> */
import { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

export const BackButton = ({ navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <>
      <TouchableOpacity onPress={navigation.goBack}
        style={{
          borderRadius: 10,
          borderWidth: 1,
          padding: 8,
          borderColor: THEME.card,
          backgroundColor: THEME.card,
          marginRight: 4,
        }}
      >
        <Icon
          name='chevron-thin-left'
          size={20}
          color={`${THEME.text}`}
        />
        
      </TouchableOpacity>
    </>
  )
}
