import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { user } from "../../stores/user";
import { useAtom } from "jotai";

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
  ];
  const navigation: any = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MarineScreen");
        }}
      >
        <Text>Good Morning {data.name}</Text>
      </TouchableOpacity>

      <View>
        {category?.map((item) => {
          return <Text key={item?.id}>{item.name}</Text>;
        })}
      </View>
    </View>
  );
};

export default HomeScreenWhenUserExist;
