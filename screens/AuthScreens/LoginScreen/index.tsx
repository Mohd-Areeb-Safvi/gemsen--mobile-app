import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import theme from "../../../theme";

import axios from "axios";
import { useAtom } from "jotai";
import { user } from "../../../stores/user";
import Navigation from "../../../navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }: any) => {
  const [data, setData] = useAtom(user);

  const login = async () => {
    const formData = new FormData();

    formData.append("form_key", "qH6JPq2WgcDw7PRu");
    formData.append("login[username]", "kgill@gemsen.com");
    formData.append("login[password]", "Password2022222");
    axios
      .post("https://shop.bioworldcanada.com/customer/account/loginPost/", {
        formData,
      })
      .then((res) => {
        console.log(res, "res");
        // setData(true);
        // AsyncStorage.setItem("logged_in", JSON.stringify({ isLoggedIn: true }));
        // navigation.navigate("Root");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const currentUser = async () => {
    const data = await axios.get("https://shop.gemsen.com/customer/account/");
    console.log(data, "data");
  };

  return (
    <SafeAreaView>
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

      <TextInput
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
      />
      <TextInput
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
