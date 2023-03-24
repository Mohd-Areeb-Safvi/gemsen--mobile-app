import { View, Text } from "react-native";
import React from "react";

const ABC = ({ title }: any) => {
  return (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: "red",
        paddingVertical: 40,
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

export default ABC;
