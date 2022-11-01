import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { user } from "../../stores/user";

const SplashScreen = ({ navigation }: any) => {
  const [userData, setUserData] = useAtom(user);

  useEffect(() => {
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
