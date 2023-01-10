import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import { AutoComplete } from "react-native-element-textinput";
import theme from "../../theme";

const SearchScreen = () => {
  const [value, setValue] = useState("");

  const [searchLength, setSearchLength] = useState<any>();
  console.log("searchLength", searchLength, value);
  const products = [
    {
      id: 1,
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
      id: 2,
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
      id: 4,
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
      id: 3,
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
  ];

  const productName = products?.map((item) => item.productName);
  const skuName = products?.map((item) => item.sku);

  const newArr = [...productName, ...skuName];

  useEffect(() => {
    console.log(1);
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin icon="menu" />
      {/* <View></View> */}
      <View style={{ height: 100, zIndex: 100 }}>
        <View
          style={{
            marginVertical: 20,
            position: "absolute",
            width: "100%",
            zIndex: 100,
          }}
        >
          {/* <TextInput
            placeholder="Search for products..."
            placeholderTextColor={"#000"}
            style={{
              borderWidth: 1,
              borderColor: "#aaa",
              paddingVertical: 10,
              marginHorizontal: 20,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
          /> */}
          <AutoComplete
            value={value}
            data={newArr}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            // label="Auto Complete"
            placeholder="Search for productss..."
            placeholderTextColor="gray"
            onChangeText={(e) => {
              setValue(e);
            }}
            renderItem={(item: any) => {
              console.log(item, "aa");
              setSearchLength(item);
              return (
                <View
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                  }}
                >
                  <Text
                    style={{ fontFamily: theme.font.fontLight, fontSize: 12 }}
                  >
                    {item.productName}
                  </Text>
                </View>
              );
            }}
          />
          {!!searchLength === true && !!value === true ? (
            <View style={{ backgroundColor: "#fff" }}>
              <Text style={{ textAlign: "center" }}>
                View All {products.length} results
              </Text>
            </View>
          ) : (
            <></>
          )}
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
