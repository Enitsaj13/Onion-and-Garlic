/* <-- screens --> */
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
import { ProductsList } from "screens/ProductsList.jsx"
import { ProductDetails } from "screens/ProductDetails.jsx"
import { Cart } from "screens/Cart.jsx"
import { CartProvider } from "CartContext.jsx"
import { CartIcon } from "components/CartIcon.jsx"

const Screen = [
  {
      name: 'Landing',
      component: Landing,
  },
  {
      name: 'LandingScreen',
      component: LandingScreen,
  },
  {
      name: 'BottomNavigator',
      component: BottomNavigator,
  },
  {
      name: 'DetailsScreen',
      component: DetailsScreen,
  },
  {
      name: 'HomeScreen',
      component: HomeScreen,
  },
  {
      name: 'CookingScreen',
      component: CookingScreen,
  },
  {
      name: 'FavoriteScreen',
      component: FavoriteScreen,
  },
  {
      name: 'MenuScreen',
      component: MenuScreen,
  },
  {
      name: 'Login',
      component: Login,
  },
  {
      name: 'Registration',
      component: Registration,
  },
  {
      name: 'Checkout',
      component: Checkout,
  },
  {
      name: 'Feedback',
      component: Feedback,
  },
  {
      name: 'Settings',
      component: Settings,
  },
  {
      name: 'MyCart',
      component: MyCart,
  },
  {
      name: 'Otp',
      component: Otp,
  },
  {
      name: 'EmailVerification',
      component: EmailVerification,
  },
  {
      name: 'Payment',
      component: Payment,
  },
  {
      name: 'ForgotPassword',
      component: ForgotPassword,
  },
  {
      name: 'ResetPassword',
      component: ResetPassword,
  },
  {
      name: 'EditProfile',
      component: EditProfile,
  },


]

export default Screen