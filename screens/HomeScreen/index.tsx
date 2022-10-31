import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import CategorySection from "./CategorySection";
import ScrollImages from "./ScrollImages";
import FooterSection from "../../components/FooterSection";
import Header from "../../components/Header";
const { width } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
