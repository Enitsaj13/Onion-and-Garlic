/* <-- dependencies --> */
import { useContext } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

export const BackButton = ({ navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <>
      <View
        style={{
          padding: 1,
          borderRadius: 10,
          borderWidth: 1,
          padding: 8,
          marginRight: 4,
          borderColor: THEME.card,
          backgroundColor: THEME.card,
        }}
      >
        <Icon
          name='chevron-thin-left'
          size={20}
          onPress={navigation.goBack}
          color={`${THEME.text}`}
        />
      </View>
    </>
  )
}
