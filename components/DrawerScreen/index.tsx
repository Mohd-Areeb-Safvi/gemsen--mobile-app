import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { user } from "../../stores/user";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { category } from "../../data";

const DrawerScreen = () => {
  const [userData, setUserData] = useAtom(user);

  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Ionicons name="close" size={26} />
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 19,
              marginLeft: 15,
            }}
          >
            Main menu
          </Text>
        </View>
        {category?.map((item) => {
          return (
            <TouchableOpacity
              onPress={async () => {
                if (item.id === 9) {
                  await AsyncStorage.clear();
                  setUserData({});
                }
                navigation.navigate(item.route, {
                  data: item,
                });
              }}
              key={item.id}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                paddingVertical: 20,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontLight,
                  fontSize: 15,
                  marginLeft: 15,
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

export default DrawerScreen;
