import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { user } from "../../stores/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }: any) => {
  const [userData, setUserData] = useAtom(user);

  const getUser = async () => {
    const data: any = await AsyncStorage.getItem("loggedIn");
    const parseData = JSON.parse(data);
    if (parseData !== null) setUserData(parseData);
  };

  useEffect(() => {
    getUser();
    setTimeout(() => {
      navigation.navigate("Root");
    }, 1200);
    return () => {};
  }, []);

  return (
    <SafeAreaView>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
