import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import HomeCategoryDetails from "../../components/HomeCategoryDetails";

const HomeCategoryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header value={"Home"} />
        <HomeCategoryDetails />
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeCategoryScreen;
