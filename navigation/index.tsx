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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName, Pressable, Text, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import BrandScreen from "../screens/BrandScreen";
import ShopScreen from "../screens/ShopScreen";
import AccountScreen from "../screens/AccountScreen";

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
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
