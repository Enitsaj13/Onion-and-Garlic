/* <-- dependencies --> */
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

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
            {/* map the stack */}
            {Stacks.map((screen, index) => (
                <Stack.Screen
                    key={index}
                    name={screen.name}
                    component={screen.component}
                    options={{
                        ...TransitionPresets.ModalFadeTransition,
                        
                    }}
                />
            ))}
        </Stack.Navigator>
      )
    }

export default AppStack
