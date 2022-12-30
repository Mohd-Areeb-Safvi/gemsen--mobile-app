import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import FooterSection from "../../components/FooterSection";
import ModalDropdown from 'react-native-modal-dropdown';

const DisplayProductsScreen = ({ route, navigation }: any) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin value={""} icon="menu" />
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: theme.font.fontMedium,
            marginTop: 20,
          }}
        >
          {data.name}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: theme.font.fontLight,
            marginTop: 20,
          }}
        >
          {data.products?.length} Results
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "70%",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "#545d63",
              borderRadius: 30,
              paddingVertical: 15,
              paddingHorizontal: 40,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontFamily: theme.font.fontMedium,
                textTransform: "uppercase",
              }}
            >
              Filter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "#545d63",
              borderRadius: 30,
              paddingVertical: 15,
              paddingHorizontal: 40,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontFamily: theme.font.fontMedium,
                textTransform: "uppercase",
              }}
            >
              Sort
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          {data.products?.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DisplayIndividualProductDetails", {
                    data: item,
                  });
                }}
                key={item.id}
                style={{
                  paddingVertical: 10,
                  width: "50%",
                }}
              >
                <TouchableOpacity
                  style={{ position: "absolute", right: 20, zIndex: 10 }}
                >
                  <Ionicons name="heart-outline" size={25} />
                </TouchableOpacity>
                <Image
                  source={{ uri: item.productImage[0] }}
                  style={{
                    width: "70%",
                    height: 200,
                    resizeMode: "repeat",
                    alignSelf: "center",
                  }}
                />
                <View
                  style={{
                    width: 130,
                    alignSelf: "center",
                    marginVertical: 10,
                  }}
                >
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    {item.productName}
                  </Text>
                </View>
                <View style={{ width: 130, alignSelf: "center" }}>
                  <Text>{item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayProductsScreen;
