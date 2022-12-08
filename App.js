/* <-- dependencies --> */
import Toast from 'react-native-toast-message'
import { useState, useEffect } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'

import { CartProvider } from "hooks/CartContext";


import Landing from 'screens/Landing'
import LandingScreen from 'screens/LandingScreen'
import BottomNavigator from 'navigation/BottomNavigator'
import DetailsScreen from 'screens/DetailScreen'
import HomeScreen from 'screens/HomeScreen'
import CookingScreen from 'screens/CookingScreen'
import FavoriteScreen from 'screens/FavoriteScreen'
import MenuScreen from 'screens/MenuScreen'
import Login from 'screens/Login'
import Registration from 'screens/Registration'
import Checkout from 'screens/Checkout'
import Feedback from 'screens/Feedback'
import Settings from 'screens/Settings'
import MyCart from 'screens/MyCart'
import Otp from 'components/Otp'
import Payment from 'screens/Payment'
import ForgotPassword from 'screens/ForgotPassword'
import ResetPassword from 'screens/ResetPassword'
import EditProfile from 'screens/EditProfile'
import EmailVerification from 'components/EmailVerification'
import ProductsList from "screens/ProductsList"
import ProductDetails from "screens/ProductDetails"
import Cart from "screens/Cart"
import Faq from "screens/Faq"

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'


/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { THEME, COLORS } from 'theme'

/* <-- App Stack --> */
import AppStack from 'navigation/AppStack'

/* <-- components --> */
import FocusedStatusBar from 'components/FocusedStatusBar'


/* <-- navigator --> */
const Stack = createStackNavigator()


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
    <CartProvider>
      <ThemeContext.Provider value={themeMode ? THEME.dark : THEME.light}>
        <NavigationContainer theme={MyTheme}>
          <FocusedStatusBar
            barStyle={themeMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CookingScreen" component={CookingScreen} />
            <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EmailVerification" component={EmailVerification} />
            <Stack.Screen name="ProductsList" component={ProductsList} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Faq" component={Faq} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </ThemeContext.Provider>
    </CartProvider>
  )
}

export default App




