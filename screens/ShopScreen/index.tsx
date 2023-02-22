import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { user } from "../../stores/user";

const ShopScreen = () => {
  const [userData, setUserData] = useAtom(user);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>ShopScreen</Text>

      <TouchableOpacity
        onPress={() => {
          AsyncStorage.clear();
          setUserData({});
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ShopScreen;
