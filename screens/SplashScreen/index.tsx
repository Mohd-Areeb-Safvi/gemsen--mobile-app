import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { cart, user } from "../../stores/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }: any) => {
  const [userData, setUserData] = useAtom(user);
  const [addToCart, setAddToCart] = useAtom(cart);

  const getUser = async () => {
    const data: any = await AsyncStorage.getItem("loggedIn");
    const parseData = JSON.parse(data);
    if (parseData !== null) setUserData(parseData);
  };
  const data2 = async () => {
    const data: any = await AsyncStorage.getItem(`cart${userData.name}`);
    const parsedData = JSON.parse(data);

    console.log("parsedData", parsedData);
    if (data !== null) setAddToCart(parsedData.cart);
  };
  useEffect(() => {
    getUser();
    setTimeout(() => {
      navigation.navigate("Root");
    }, 1200);
    return () => {};
  }, []);

  useEffect(() => {
    data2();
  }, [userData]);

  return (
    <SafeAreaView>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
