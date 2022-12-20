import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const NestedSubCategoryScreen = ({ route }: any) => {
  const { data } = route.params;
  console.log(data, "nested");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.subCategories?.map((item) => {
        return <Text>{item}</Text>;
      })}
    </SafeAreaView>
  );
};

export default NestedSubCategoryScreen;
