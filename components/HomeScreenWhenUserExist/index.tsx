import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { user } from "../../stores/user";
import { useAtom } from "jotai";
import { ScrollView } from "react-native-gesture-handler";
import theme from "../../theme";
import Header from "../Header";
import HeaderAfterLogin from "../HeaderAfterLogin";
import ScrollImages from "../../screens/HomeScreen/ScrollImages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FooterSection from "../FooterSection";
import NewModel from "../../assets/images/newmorel.png";
const HomeScreenWhenUserExist = () => {
  const [data, setData] = useAtom(user);

  const user1 = [
    {
      data: {
        name: "Areeb",
      },
      _id: "63d0a66dd884be140aac803e",
      name: "Areeb",
      password: "123456",
      email: "adminaaaa1@admin.com",
      __v: 0,
    },
    {
      data: {
        name: "Areeb",
        email: "a@admin.com",
      },
      _id: "63d0a6a663c78db2a52cc78f",
      name: "Areeb",
      password: "123456",
      email: "a@admin.com",
      __v: 0,
    },
    {
      data: {
        name: "Areeb",
        email: "a@aadmin.com",
      },
      _id: "63d0a6d4f6971c17a90bc803",
      name: "Areeb",
      password: "123456",
      email: "a@aadmin.com",
      __v: 0,
    },
    {
      data: {
        name: "Areeb",
        email: "a@aaadmin.com",
      },
      _id: "63d0a6f83be62cda587525d4",
      name: "Areeb",
      password: "123456",
      email: "a@aaadmin.com",
      __v: 0,
    },
    {
      data: {
        name: "Areeb",
        email: "a@aaaadmin.com",
      },
      _id: "63d0a72ebdb89a775c8c4e55",
      name: "Areeb",
      password: "123456",
      email: "a@aaaadmin.com",
      __v: 0,
    },
    {
      data: {
        name: "Areeb",
        email: "a@aaaaadmin.com",
      },
      _id: "63d0a7b6aad78f374f4291bf",
      name: "Areeb",
      password: "123456",
      email: "a@aaaaadmin.com",
      __v: 0,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAfterLogin value={""} icon="menu" />

        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              color: "#000",
              paddingHorizontal: 10,
              paddingVertical: 6,
              fontSize: 19,
              marginVertical: 10,
            }}
          >
            Good Morning ,{" "}
            <Text
              style={{
                color: theme.colors.primary,
              }}
            >
              {data.name}
            </Text>
          </Text>
        </TouchableOpacity>
        <ScrollImages />

        {/* <Text
          style={{
            fontFamily: theme.font.fontMedium,
            color: "#000",
            paddingHorizontal: 10,
            fontSize: 19,
            marginVertical: 10,
          }}
        >
          Categories :
        </Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SubCategoryScreen", {
                      data: item,
                    });
                  }}
                  key={item?.id}
                  style={{
                    marginRight: 20,
                    borderRadius: 10,
                    backgroundColor: theme.colors.primary,
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: "#fff",
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View> */}
        {/* Images*/}
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            paddingLeft: 0,
            marginRight: 20,
            marginLeft: 20,
          }}
        >
          <View style={{ flex: 1 / 3, justifyContent: "center" }}>
            <Image
              source={{
                uri: "https://shop.gemsen.com/media/400x423navtv_1.jpg",
              }}
              style={{ width: 120, height: 150, resizeMode: "contain" }}
            />
          </View>
          <View
            style={{ flex: 1 / 3, marginLeft: 15, justifyContent: "center" }}
          >
            <Image
              source={{
                uri: "https://shop.gemsen.com/media/wysiwyg/400x423_Clarion.jpg",
              }}
              style={{ width: 120, height: 150, resizeMode: "contain" }}
            />
            {/* <Image
              source={NewModel}
              style={{ width: 120, height: 150, resizeMode: "contain" }}
            /> */}
          </View>
          <View
            style={{
              flex: 1 / 3,
              marginLeft: 15,
              justifyContent: "center",
              paddingRight: 15,
            }}
          >
            <Image
              source={{
                uri: "https://shop.gemsen.com/media/wysiwyg/400x423carplay.jpg",
              }}
              style={{ width: 120, height: 150, resizeMode: "contain" }}
            />
          </View>
        </View>
        <View
          style={{ flex: 1 / 2, paddingLeft: 20, justifyContent: "center" }}
        >
          <View style={{ paddingTop: 0, flex: 1 / 2 }}>
            <Image
              source={{
                uri: "https://shop.gemsen.com/media/1240x254parasound_1.jpg",
              }}
              style={{ width: 355, height: 150, resizeMode: "contain" }}
            />
          </View>
        </View>
        <FooterSection />
      </ScrollView>
    </View>
  );
};

export default HomeScreenWhenUserExist;
