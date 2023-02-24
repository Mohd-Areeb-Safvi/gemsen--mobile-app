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
import { userLogin } from "../../../store/services/auth";
import { getCategory } from "../../../store/services/category";

const LoginScreen = ({ navigation }: any) => {
  const [data, setData] = useAtom(user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const login = async () => {
    if (!!name === false || !!email === false || !!password === false) {
      setError("Please enter the details");
    } else if (name && email && password) {
      userLogin({
        body: {
          name: name,
          email: email,
          password: password,
        },
      })
        .then(async (res: any) => {
          console.log("res", res);
          setData(res?.data?.data);
          await AsyncStorage.setItem("accessToken", res?.accessToken);
          setTimeout(() => {
            navigation.navigate("Root");
          }, 1200);
        })
        .catch(async (err: any) => {
          console.log("err?.data?.message", err?.data?.message);
          setError(err?.data?.message);
        });
    }
  };

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
        LoginScreen
      </Text>
      {error ? <Text>{error}</Text> : <></>}
      {success ? <Text>{success}</Text> : <></>}
      <TextInput
        value={name}
        autoCapitalize={"none"}
        placeholder="Name"
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
          setName(e);
        }}
      />
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
