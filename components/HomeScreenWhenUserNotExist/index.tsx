import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../Header";
import ScrollImages from "../../screens/HomeScreen/ScrollImages";
import theme from "../../theme";
import CategorySection from "../../screens/HomeScreen/CategorySection";
import FooterSection from "../FooterSection";
import { useNavigation } from "@react-navigation/native";

const HomeScreenWhenUserNotExist = ({ navigation }: any) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AuthRoot");
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
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
    </View>
  );
};

export default HomeScreenWhenUserNotExist;
