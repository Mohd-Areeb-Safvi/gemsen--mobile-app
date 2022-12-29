import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";

const AddToCartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderAfterLogin icon="menu" />
    </SafeAreaView>
  );
};

export default AddToCartScreen;
