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
  useNavigation,
} from "@react-navigation/native";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ColorSchemeName,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
import BrandDetailsScreen from "../screens/BrandDetailsScreen";
import { useAtom } from "jotai";
import { user } from "../stores/user";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import SearchScreen from "../screens/SearchScreen";
import AddToCart from "../screens/AddToCart";
import SubCategoryScreen from "../screens/SubCategoryScreen";
import NestedSubCategoryScreen from "../screens/NestedSubCategoryScreen";

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

function AuthRoot() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function BottomTabNavigatorAfterLogin() {
  const [userData, setUserData] = useAtom(user);

  const colorScheme = useColorScheme();
  const navigation: any = useNavigation();
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
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
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: ({ focused }: any) => {
            return (
              <View>
                <Text style={{ color: focused ? "blue" : "#000" }}>Search</Text>
              </View>
            );
          },

          tabBarIcon: ({ color }: any) => (
            <Ionicons name="search-sharp" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddToCart"
        component={AddToCart}
        options={{
          tabBarLabel: ({ focused }: any) => {
            return (
              <View>
                <Text style={{ color: focused ? "blue" : "#000" }}>Cart</Text>
              </View>
            );
          },

          tabBarIcon: ({ color }: any) => (
            <Ionicons name="cart-outline" size={25} />
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

function RootNavigator() {
  const [data, setData] = useAtom(user);
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Root"
        component={
          data.email ? BottomTabNavigatorAfterLogin : BottomTabNavigator
        }
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AuthRoot"
        component={AuthRoot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab: any = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
        name="BrandDetailsScreen"
        component={BrandDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MarineScreen"
        component={MarineScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeCategoryScreen"
        component={HomeCategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubCategoryScreen"
        component={SubCategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NestedSubCategoryScreen"
        component={NestedSubCategoryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const [userData, setUserData] = useAtom(user);

  const colorScheme = useColorScheme();
  const navigation: any = useNavigation();
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
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
          tabBarButton: (props: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (userData === false) {
                    navigation.navigate("AuthRoot");
                  } else if (userData === true) {
                    navigation.navigate("ShopScreen");
                  }
                }}
              >
                <Ionicons
                  name="apps-outline"
                  size={25}
                  color={props?.accessibilityState?.selected ? "blue" : "#000"}
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{
                    color: props?.accessibilityState?.selected
                      ? "blue"
                      : "#000",
                  }}
                >
                  Shop
                </Text>
              </TouchableOpacity>
            );
          },
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
