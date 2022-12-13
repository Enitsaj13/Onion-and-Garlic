/* <-- dependencies --> */
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

/* <-- screens --> */
import Landing from 'screens/Landing'
import LandingScreen from 'screens/LandingScreen'
import BottomNavigator from 'navigation/BottomNavigator'
import DetailsScreen from 'screens/DetailScreen'
import HomeScreen from 'screens/HomeScreen'
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

/* <-- navigator --> */
const Stack = createStackNavigator()


const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="Landing" component={Landing} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="LandingScreen" component={LandingScreen} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="HomeScreen" component={HomeScreen} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="FavoriteScreen" component={FavoriteScreen} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="MenuScreen" component={MenuScreen} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="Login" component={Login} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="Registration" component={Registration} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="Checkout" component={Checkout} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="Feedback" component={Feedback} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="Settings" component={Settings} />
            <Stack.Screen name="MyCart" options={{
                ...TransitionPresets.ModalTransition
            }} component={MyCart} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="Otp" component={Otp} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="Payment" component={Payment} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="ResetPassword" component={ResetPassword} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EmailVerification" component={EmailVerification} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="ProductsList" component={ProductsList} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalFadeTransition
            }} name="ProductDetails" component={ProductDetails} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="Cart" component={Cart} />
            <Stack.Screen options={{
                ...TransitionPresets.ModalPresentationIOS
            }} name="Faq" component={Faq} />
        </Stack.Navigator>
      )
    }

export default AppStack
