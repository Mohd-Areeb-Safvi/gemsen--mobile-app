/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName, Pressable, Text, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import BrandScreen from "../screens/BrandScreen";
import ShopScreen from "../screens/ShopScreen";
import AccountScreen from "../screens/AccountScreen";
import MobileCategoryScreen from "../screens/MobileCategoryScreen";
import PowerSportScreen from "../screens/PowerSportScreen";
import HomeCategoryScreen from "../screens/HomeCategoryScreen";
import MarineScreen from "../screens/MarineScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack: any = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MobileCategoryScreen"
        component={MobileCategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PowerSportScreen"
        component={PowerSportScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeCategoryScreen"
        component={HomeCategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MarineScreen"
        component={MarineScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab: any = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          // title: "Tab Two",
          tabBarLabel: ({ focused }: any) => {
            return (
              <View>
                <Text style={{ color: focused ? "blue" : "#000" }}>Home</Text>
              </View>
            );
          },

          tabBarIcon: ({ color }: any) => <Ionicons name="home" size={25} />,
        }}
      />
      <BottomTab.Screen
        name="BrandScreen"
        component={BrandScreen}
        options={{
          // title: "Tab Two",
          tabBarLabel: ({ focused }: any) => {
            return (
              <View>
                <Text style={{ color: focused ? "blue" : "#000" }}>Brand</Text>
              </View>
            );
          },

          tabBarIcon: ({ color }: any) => (
            <Ionicons name="albums-outline" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          // title: "Tab Two",
          tabBarLabel: ({ focused }: any) => {
            return (
              <View>
                <Text style={{ color: focused ? "blue" : "#000" }}>Shop</Text>
              </View>
            );
          },

          tabBarIcon: ({ color }: any) => (
            <Ionicons name="apps-outline" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          // title: "Tab Two",
          tabBarLabel: ({ focused }: any) => {
            return (
              <View>
                <Text style={{ color: focused ? "blue" : "#000" }}>
                  Account
                </Text>
              </View>
            );
          },

          tabBarIcon: ({ color }: any) => (
            <Ionicons name="person-circle" size={25} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
