/* <-- dependencies --> */
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

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
import { CartIcon } from "components/CartIcon.jsx"

/* <-- navigator --> */
const Stack = createStackNavigator()

/* <-- stack screens details --> */
import Stacks from 'navigation/Stacks'

const AppStack = () => {
    return (
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
            <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
            <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
        </Stack.Navigator>
      )
    }

export default AppStack
