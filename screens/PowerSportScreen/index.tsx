import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FooterSection from "../FooterSection";

const PowerSportScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 200, backgroundColor: "red" }}></View>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PowerSportScreen;
