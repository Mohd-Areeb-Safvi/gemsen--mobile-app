import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { user } from "../../stores/user";
import { useAtom } from "jotai";
import { ScrollView } from "react-native-gesture-handler";
import theme from "../../theme";
import Header from "../Header";
import HeaderAfterLogin from "../HeaderAfterLogin";
import ScrollImages from "../../screens/HomeScreen/ScrollImages";

const HomeScreenWhenUserExist = () => {
  const [data, setData] = useAtom(user);
  const category = [
    {
      id: 1,
      name: "Shop By Categories",
    },
    {
      id: 2,
      name: "Mobile",
    },
    {
      id: 3,
      name: "Marine",
    },
    {
      id: 4,
      name: "Power Sport",
    },
    {
      id: 5,
      name: "Home",
    },
    {
      id: 6,
      name: "What's new",
    },
    {
      id: 7,
      name: "Sale",
    },
  ];
  const navigation: any = useNavigation();
  return (
    <View>
      <HeaderAfterLogin value={""} />
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

      <Text
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category?.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SubCategoryScreen", {
                  categoryName: item.name,
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
    </View>
  );
};

export default HomeScreenWhenUserExist;
