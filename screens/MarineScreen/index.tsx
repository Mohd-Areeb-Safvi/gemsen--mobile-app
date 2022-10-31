import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";

const MarineScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header value={"Marine"} />
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarineScreen;
