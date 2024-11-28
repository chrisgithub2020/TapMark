import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Index from "./index"
import HomeLayout from "./home/_layout"

const Stack = createNativeStackNavigator()
const _layout = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen component={Index} name="main" options={{headerShown: false}}/>
      <Stack.Screen component={HomeLayout} name="home" options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default _layout