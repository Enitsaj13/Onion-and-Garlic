import { useContext } from 'react'
import { View } from 'react-native'
import { BackButton } from 'components/BackButton'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

const Header = ({ navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <View
      style={{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: `${THEME.background}`,
      }}
    >
      <BackButton navigation={navigation} />
    </View>
  )
}

export default Header
