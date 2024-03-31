import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../screens/TabScreens/Home";
import Info from "../screens/TabScreens/info";
import SignUp from "../screens/StackScreens/authentication/SignUp";
import Login from "../screens/StackScreens/authentication/Login";
import Profile from "../screens/TabScreens/Profile";
import { useAuth } from "../auth/authContext";
import Onboarding from "../screens/StackScreens/authentication/Onboarding";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Word"
      screenOptions={{
        // Use screenOptions here
        tabBarActiveTintColor: "#7dac9a",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="profile"
        crossbook
        component={Info}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome5
                name="bible"
                size={18} // Use the provided size
                color={focused ? "#7dac9a" : "gray"} // Adjust your colors as needed
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Word"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome5
                name="cross"
                size={size} // Use the provided size
                color={focused ? "#7dac9a" : "gray"} // Adjust your colors as needed
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome5
                name="book-open"
                size={18} // Use the provided size
                color={focused ? "#7dac9a" : "gray"} // Adjust your colors as needed
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const { currentUser, userLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userLoggedIn ? (
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
