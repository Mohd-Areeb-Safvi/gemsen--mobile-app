import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShopScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>ShopScreen</Text>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.removeItem("logged_in");
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ShopScreen;
