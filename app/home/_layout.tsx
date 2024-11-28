import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {useState} from "react";
import Index from "./index";
import Profile from "./profile";
import Notifications from "./notification";

const Stack = createNativeStackNavigator();
const HomeLayout = () => {
    const [username, serUsername] = useState<string>("TapMark")
  return (
    <Stack.Navigator>
      <Stack.Screen component={Index} name="main" options={{ headerShown: false }} />
      <Stack.Screen component={Notifications} name="notifications" options={{headerTintColor:"#fff", headerTitleStyle: {color: "white"}, headerStyle: {backgroundColor: "#800000"} , headerTitle: "Notifications", headerTitleAlign: "center"}}/>
      <Stack.Screen component={Profile} name="profile" options={{headerTitleStyle: {color: "white",}, headerStyle: {backgroundColor: "#800000"}, headerTintColor: "#fff", headerTitle: "Hi "+ username, headerTitleAlign: "center"}}/>
    </Stack.Navigator>
  );
};

export default HomeLayout;
