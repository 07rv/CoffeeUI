import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text } from "react-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Tab = createBottomTabNavigator();

export default function Register() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBarShowLabel={false}
      >
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
