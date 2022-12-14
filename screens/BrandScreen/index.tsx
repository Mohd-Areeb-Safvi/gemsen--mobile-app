import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { user } from "../../stores/user";
import { useAtom } from "jotai";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BrandScreen = () => {
  const [data, setData] = useAtom(user);

  console.log(data, "data");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={async () => {
          if (data === true) {
            await AsyncStorage.clear();
            setData(false);
          }
        }}
      >
        <Text>{data === true ? "Logout" : "Login"}</Text>
      </TouchableOpacity>
      <Text>BrandScreen</Text>
    </SafeAreaView>
  );
};

export default BrandScreen;
