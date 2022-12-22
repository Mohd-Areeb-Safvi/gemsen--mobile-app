import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const DisplayProductsScreen = ({ route }: any) => {
  const { data } = route.params;
  console.log(data);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>DisplayProductsScreen</Text>
    </SafeAreaView>
  );
};

export default DisplayProductsScreen;
