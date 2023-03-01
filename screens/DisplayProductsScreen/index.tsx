import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import FooterSection from "../../components/FooterSection";
import ModalDropdown from "react-native-modal-dropdown";
import { getProducts } from "../../store/services/product";

const DisplayProductsScreen = ({ route, navigation }: any) => {
  const { data } = route.params;
  const [getProductsData, setGetProductsData] = useState([]);
  useEffect(() => {
    getProducts({
      pathParams: {
        id: data?._id,
      },
    }).then((res: any) => {
      setGetProductsData(res?.products);
    });
  }, [data?._id]);

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
          {getProductsData?.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log("item", item);
                  navigation.navigate("DisplayIndividualProductDetails", {
                    data: item,
                  });
                }}
                key={item._id}
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
                  source={{
                    uri: "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
                  }}
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
                    Name: {item.name}
                  </Text>
                </View>
                <View style={{ width: 130, alignSelf: "center" }}>
                  <Text>Sku :{item.sku}</Text>
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
