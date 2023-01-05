import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import React from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            placeholder="Search for products..."
            placeholderTextColor={"#000"}
            style={{
              borderWidth: 1,
              borderColor: "#aaa",
              paddingVertical: 10,
              marginHorizontal: 20,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
          />
        </View>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
