import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../../../theme";

import axios from "axios";
import { useAtom } from "jotai";
import { user } from "../../../stores/user";
import Navigation from "../../../navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }: any) => {
  const [data, setData] = useAtom(user);

  const emailAddress = "areeb@gmail.com";
  const pass = "123456";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = async () => {
    if (email !== emailAddress || password !== pass) {
      setError("User Not Exist");
    } else if (email === emailAddress && password === pass) {
      setError("User Exist");
      await AsyncStorage.setItem(
        "loggedIn",
        JSON.stringify({ isLogged: true })
      );
      navigation.navigate("HomeScreen");
    }
  };

  const a = async () => {
    return 2;
  };
  const data1 = async () => {
    console.log(1, "1");

    const d = await a();
    console.log(d);

    // a().then((res) => {
    //   console.log(res, "2");
    // });

    console.log(3, "3");
  };

  useEffect(() => {
    data1();
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontFamily: theme.font.fontRobotoBlack,
          fontSize: 20,
          textAlign: "center",
          marginVertical: 20,
        }}
      >
        LoginScreen {password}
      </Text>
      {error ? <Text>{error}</Text> : <></>}
      <TextInput
        value={email}
        autoCapitalize={"none"}
        placeholder="Email"
        style={{
          width: "90%",
          paddingVertical: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginVertical: 10,
          alignSelf: "center",
          paddingHorizontal: 10,
        }}
        onChangeText={(e) => {
          setEmail(e);
        }}
      />
      <TextInput
        value={password}
        placeholder="Password"
        style={{
          width: "90%",
          paddingVertical: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginVertical: 10,
          alignSelf: "center",
          paddingHorizontal: 10,
        }}
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          login();
        }}
        style={{
          backgroundColor: "skyblue",
          width: "90%",
          alignSelf: "center",
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            fontFamily: theme.font.fontRobotoBlack,
            fontSize: 20,
            textAlign: "center",
            paddingVertical: 10,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
