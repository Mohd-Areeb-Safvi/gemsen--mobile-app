import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import CategorySection from "./CategorySection";
import ScrollImages from "./ScrollImages";
import FooterSection from "../../components/FooterSection";
import Header from "../../components/Header";
import { useAtom } from "jotai";
import { user } from "../../stores/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("window");
const HomeScreen = () => {
  const [data, setData] = useAtom(user);

  console.log(data, "user");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => {}}>
        <Text>Login</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header value={"DashBoard"} />
        <ScrollImages />
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: theme.font.fontRobotoBold,
              color: theme.colors.black,
              fontSize: 20,
              textAlign: "center",
              marginVertical: 30,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Welcome to Gemsen
          </Text>
          <Text
            style={{
              // fontFamily: theme.font.fontSpaceMono,
              color: theme.colors.black,
              textAlign: "center",
              fontSize: 14,
              lineHeight: 26,
            }}
          >
            We are a national consumer electronics distributor supplying
            Canadian retailers with the finest brands of audio / video products
            in the home, mobile, marine and power sports categories for over 35
            years.
          </Text>
        </View>
        <CategorySection />
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
