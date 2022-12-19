import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useAtom } from "jotai";
import { user } from "../../stores/user";

import HomeScreenWhenUserNotExist from "../../components/HomeScreenWhenUserNotExist";
import HomeScreenWhenUserExist from "../../components/HomeScreenWhenUserExist";
const { width } = Dimensions.get("window");
const HomeScreen = ({ navigation }: any) => {
  const [data, setData] = useAtom(user);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data?.email ? (
        <HomeScreenWhenUserExist />
      ) : (
        <HomeScreenWhenUserNotExist navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
