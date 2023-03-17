import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { shippingAddress } from "../../store/services/address";
import {
  addressListJotai,
  cart,
  shippingMethodsJotai,
} from "../../stores/user";
import { useAtom } from "jotai";

const ShippingAddressScreen = ({ navigation }: any) => {
  const [shippingMethods, setShippingMethods] = useAtom(shippingMethodsJotai);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const [getAddressData, setGetAddressData] = useState([]);
  const [getShippingAddressData, setGetShippingAddressData] = useState([]);
  const [addressData, setAddressData] = useAtom(addressListJotai);
  const [addToCart, setAddToCart] = useAtom(cart);
  const [modal, setModal] = useState(false);
  const totalPrice = addToCart?.reduce((prev: any, curr: any) => {
    return prev + curr.quantity * curr.productDetails?.price;
  }, 0);
  useEffect(() => {
    shippingAddress({
      body: {
        address: street,
      },
    }).then((res: any) => {
      setGetShippingAddressData(res?.address);
    });
  });

  const address = async () => {
    if (!!street === false || !!city === false || !!pin === false) {
      setError("Please enter the details");
    } else if (street && city && pin) {
      shippingAddress({
        body: {
          address: street,
          city: city,
          zipCode: pin,
        },
      });
    }
  };
  const methods = [
    {
      id: 1,
      price: 0,
      text1: "Free",
      text2: "Pickup at GEMSEN",
    },
    {
      id: 2,
      price: 0,
      text1: "Free Ground",
      text2: "Ground",
    },
    {
      id: 3,
      price: 0,
      text1: "Freight ",
      text2: "Air",
    },
  ];

  const addressList = [
    {
      id: 1,
      text1: "Staff purchase 1",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
    },
    {
      id: 2,
      text1: "Staff purchase 2",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
    },
    {
      id: 3,
      text1: "Staff purchase 3",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{}}>
          <View style={{ backgroundColor: "#f4f4f4", padding: 20 }}>
            <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 19 }}>
              Estimated Total
            </Text>
            <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 16 }}>
              ${totalPrice}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 19,
              }}
            >
              Shipping Address
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModal(true);
              }}
            >
              <Text>Add Address</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // width: "90%",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            {addressList?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setAddressData(item);
                  }}
                  key={item.id}
                  style={{
                    width: "45%",
                    borderWidth: 0.5,
                    borderColor:
                      item.id === addressData?.id
                        ? theme.colors.btncolor
                        : "#ccc",
                    marginHorizontal: 10,
                    padding: 10,
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text2}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text3}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text4}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: theme.font.fontLight, fontSize: 19 }}>
            Shipping Address
          </Text>
          <View
            style={{ backgroundColor: "#f4f4f4", padding: 10, marginTop: 10 }}
          >
            {methods?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setShippingMethods(item);
                  }}
                  key={item.id}
                  style={{ flexDirection: "row", paddingVertical: 10 }}
                >
                  <Ionicons
                    name={
                      shippingMethods?.id === item.id
                        ? "stop-circle"
                        : "ellipse-outline"
                    }
                    color={
                      shippingMethods?.id === item.id
                        ? theme.colors.btncolor
                        : "#000"
                    }
                    size={20}
                  />
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      fontSize: 18,
                      paddingHorizontal: 10,
                    }}
                  >
                    ${item.price?.toFixed(2)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 14,
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 14,
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.text2}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PaymentMethodScreen");
          }}
          style={{
            backgroundColor: theme.colors.btncolor,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 18,
              color: "#fff",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingAddressScreen;
