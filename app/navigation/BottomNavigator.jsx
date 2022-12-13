/* <-- dependencies --> */
import { useContext } from 'react'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IosIcon from 'react-native-vector-icons/Ionicons'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/* <-- screens --> */
import HomeScreen from 'screens/HomeScreen'
import MenuScreen from 'screens/MenuScreen'
import FavoriteScreen from 'screens/FavoriteScreen'
import Settings from 'screens/Settings'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

const Tab = createBottomTabNavigator()

/* <-- bottom screens details --> */
const Screen = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <Icon name='home-filled' size={28} color={color} />
      ),
    },
  },
  {
    name: 'Ingredients',
    component: MenuScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <IosIcon name='ios-search-outline' size={28} color={color} />
      ),
    },
  },
  {
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <IosIcon name='heart' size={28} color={color} />
      ),
    },
  },
  {
    name: 'Settings',
    component: Settings,
    options: {
      tabBarIcon: ({ color }) => (
        <UserIcon name='user' size={28} color={color} />
      ),
    },
  },
 
]

const BottomNavigator = () => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <Tab.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',

        tabBarShowLabel: false,
        tabBarActiveTintColor: `${THEME.activeNavigator}`,
        tabBarInactiveTintColor: `${THEME.navigator}`,

        tabBarItemStyle: {
          borderRadius: 14,
          height: 40,
          marginHorizontal: 20,
          marginTop: 10,
        },

        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      {/* <-- map the screens details -->  */}
      {Screen.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Tab.Navigator>
  )
}

export default BottomNavigator
