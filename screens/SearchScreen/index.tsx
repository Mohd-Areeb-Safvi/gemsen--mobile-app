import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import { AutoComplete } from "react-native-element-textinput";
import theme from "../../theme";
const { width } = Dimensions.get("screen");
import { debounce } from "lodash";

const SearchScreen = () => {
  const [value, setValue] = useState("");

  const [searchLength, setSearchLength] = useState<any>();

  const [array, setArray] = useState([]);

  const products = [
    {
      id: "1",
      productImage: [
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
      ],
      productName:
        "2x200Watt Amp w/Integrated Class A Preamp. USB, HDMI, Coax, BT, Optical",
      price: "222",
      status: "In Stock",
      sku: "KR-Digitalvanguard",
      description:
        "The Angelina Tank Dress is simple yet sophisticated. This dress can be thrown over a swimsuit for last minute lunch plans or belted for dinner on the patio. The high-low hemline gives it the perfect amount of swing.",
    },
    {
      id: "2",
      productImage: [
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
      ],
      productName:
        "2x200Watt Amp w/Integrated Class A Preamp. USB, HDMI, Coax, BT, Optical",
      price: "222",
      status: "In Stock",
      sku: "KR-Digitalvanguard",
      description:
        "The Angelina Tank Dress is simple yet sophisticated. This dress can be thrown over a swimsuit for last minute lunch plans or belted for dinner on the patio. The high-low hemline gives it the perfect amount of swing.",
    },
    {
      id: "4",
      productImage: [
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
      ],
      productName:
        "4x200Watt Amp w/Integrated Class A Preamp. USB, HDMI, Coax, BT, Optical",
      price: "222",
      status: "In Stock",
      sku: "KR-Digitalvanguard",
      description:
        "The Angelina Tank Dress is simple yet sophisticated. This dress can be thrown over a swimsuit for last minute lunch plans or belted for dinner on the patio. The high-low hemline gives it the perfect amount of swing.",
    },
    {
      id: "3",
      productImage: [
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
        "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
      ],
      productName:
        "3x200Watt Amp w/Integrated Class A Preamp. USB, HDMI, Coax, BT, Optical",
      price: "222",
      status: "In Stock",
      sku: "KR-Digitalvanguard",
      description:
        "The Angelina Tank Dress is simple yet sophisticated. This dress can be thrown over a swimsuit for last minute lunch plans or belted for dinner on the patio. The high-low hemline gives it the perfect amount of swing.",
    },
  ];
  const blogsSearch = useCallback(
    debounce((data: any) => {}, 500),
    []
  );
  // useEffect(() => {
  //   if (!!value === true) {
  //     const res = products.filter((obj) =>
  //       Object.values(obj).some((val) => val.indexOf(value) >= 0)
  //     );
  //     console.log(res);
  //   }
  // }, [value]);

  useEffect(() => {
    if (!!value === true) {
      const res: any = products.filter((obj) =>
        Object.values(obj).some((val) => val.includes(value))
      );
      setArray(res);
    }
  }, [value]);
  // const debounceSearch = debounce();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin icon="menu" />
      {/* <View></View> */}
      <View style={{ height: 100, zIndex: 100 }}>
        <View
          style={{
            marginVertical: 20,
            position: "absolute",
            zIndex: 100,
            height: !!value === true ? 250 : 0,
            shadowColor: !!value === true ? "#000" : "#fff",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: !!value === true ? 5 : 0,
            backgroundColor: "#fff",
            width: "96%",
            alignSelf: "center",
            padding: 10,
            borderRadius: 20,
          }}
        >
          <TextInput
            placeholder="Search for products..."
            placeholderTextColor={"#000"}
            style={{
              borderWidth: 1,
              borderColor: "#aaa",
              marginHorizontal: 20,
              paddingHorizontal: 20,
              borderRadius: 5,
              height: 40,
            }}
            value={value}
            onChangeText={(e) => {
              setValue(e);
            }}
          />
          <ScrollView>
            {!!value === true && array?.length > 0 ? (
              array?.map((item: any) => {
                return (
                  <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Text>{item.productName}</Text>
                  </View>
                );
              })
            ) : (
              <Text>No Data</Text>
            )}
          </ScrollView>
          <View>
            <View style={{ backgroundColor: "#fff" }}>
              <Text style={{ textAlign: "center" }}>
                View All {array.length} results
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {products?.map((item) => {
          return <View key={item.id}></View>;
        })}
      </View>
      <FooterSection />
    </SafeAreaView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    // position: "absolute",
    // zIndex: 10,
    // width: "90%",
  },
  inputStyle: { fontSize: 16 },
  labelStyle: { fontSize: 14 },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});
