import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

import Register from "../components/Register/Register";
import Posts from "../components/Post/Posts";
import { View, Text } from "react-native";
import {
  HomeIcon,
  ArchiveBoxIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
} from "react-native-heroicons/solid";

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
          component={Posts}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <HomeIcon size={25} color={focused ? "#e32f45" : "#748c94"} />
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
          name="Archive"
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
                <ArchiveBoxIcon
                  size={25}
                  color={focused ? "#e32f45" : "#748c94"}
                />

                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? "#e32f45" : "#748c94",
                  }}
                >
                  Archive
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
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
                <ChatBubbleLeftRightIcon
                  size={25}
                  color={focused ? "#e32f45" : "#748c94"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? "#e32f45" : "#748c94",
                  }}
                >
                  Contact
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Login"
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
                <UserCircleIcon
                  size={25}
                  color={focused ? "#e32f45" : "#748c94"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? "#e32f45" : "#748c94",
                  }}
                >
                  Login
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
