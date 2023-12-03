import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

import Register from "../components/Register/Register";
import { View, Image, Text, TouchableOpacity } from "react-native";
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 5,
            height: 90,
            borderRadius: 15,
            shadowColor: "#7F5D0",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Register}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/images/coffee1.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    // tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? "#e32f45" : "#748c94",
                  }}
                >
                  HOME
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Home1"
          component={Register}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/images/coffee2.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    // tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? "#e32f45" : "#748c94",
                  }}
                >
                  HOME1
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Home2"
          component={Register}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/coffee4.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  top: -30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home3"
          component={Register}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/images/coffee4.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    // tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? "#e32f45" : "#748c94",
                  }}
                >
                  HOME3
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Home4"
          component={Register}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/images/coffee5.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    // tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? "#e32f45" : "#748c94",
                  }}
                >
                  HOME4
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
