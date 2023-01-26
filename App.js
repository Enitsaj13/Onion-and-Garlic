/* <-- dependencies --> */
import Toast from 'react-native-toast-message'
import { useState, useEffect } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { THEME, COLORS } from 'theme'

/* <-- App Stack --> */
import AppStack from 'navigation/AppStack'

/* <-- components --> */
import FocusedStatusBar from 'components/FocusedStatusBar'


const App = () => {
  /* <-- theme --> */
  const [themeMode, setThemeMode] = useState(false)

  useEffect(() => {
    let listener = EventRegister.addEventListener('themeChanged', (data) => {
      setThemeMode(data)
    })
    return () => {
      EventRegister.removeEventListener(listener)
    }
  }, [])


  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: `${themeMode ? COLORS.dark : COLORS.white}`,
    },
  }

  return (
    <ThemeContext.Provider value={themeMode ? THEME.dark : THEME.light}>
      <NavigationContainer theme={MyTheme}>
        <FocusedStatusBar
          barStyle={themeMode ? 'light-content' : 'dark-content'} />
        <AppStack />
      </NavigationContainer>
      <Toast />
    </ThemeContext.Provider>
  )
}

export default App








