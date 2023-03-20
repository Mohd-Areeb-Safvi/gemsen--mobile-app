import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import theme from "../../theme";
import {
  addressListJotai,
  purchaseOrderNumberJotai,
  shippingMethodsJotai,
} from "../../stores/user";
import { useAtom } from "jotai";
import Navigation from "../../navigation";
const PaymentMethodScreen = ({ navigation }: any) => {
  const [shippingMethods, setShippingMethods] = useAtom(shippingMethodsJotai);
  const [addressData, setAddressData] = useAtom(addressListJotai);
  const [purchaseOrderNumberState, setPurchaseOrderNumberState] = useAtom(
    purchaseOrderNumberJotai
  );
  const [errorText, setErrorText] = useState("");
  console.log(errorText, "errorText");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 19 }}>
            Purchase Order
          </Text>
          <Text style={{ fontFamily: theme.font.fontRegular, fontSize: 19 }}>
            Address
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.font.fontLight, fontSize: 13 }}>
              {addressData?.address}
            </Text>
            <Text style={{ fontFamily: theme.font.fontLight, fontSize: 13 }}>
              {addressData?.city}
            </Text>
            <Text style={{ fontFamily: theme.font.fontLight, fontSize: 13 }}>
              {addressData?.state}
            </Text>
            <Text style={{ fontFamily: theme.font.fontLight, fontSize: 13 }}>
              {addressData?.zipCode}
            </Text>
          </View>
        </View>

        {/* <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontFamily: theme.font.fontLight,
              fontSize: 13,
              marginVertical: 6,
            }}
          >
            Purchase order number
          </Text>
          <TextInput
            value={purchaseOrderNumberState}
            onChangeText={(e) => {
              setPurchaseOrderNumberState(e);
            }}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />
        </View> */}
        {/* {errorText ? (
          <Text
            style={{
              color: "red",
              fontFamily: theme.font.fontMedium,
              paddingHorizontal: 20,
            }}
          >
            {errorText}
          </Text>
        ) : (
          <></>
        )} */}

        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontFamily: theme.font.fontLight,
              fontSize: 13,
              marginVertical: 6,
            }}
          >
            Apply Promo Code
          </Text>
          <TextInput
            // value={purchaseOrderNumberState}
            onChangeText={(e) => {
              // setPurchaseOrderNumberState(e);
            }}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: theme.colors.btncolor,
            paddingHorizontal: 0,
            paddingVertical: 5,
            width: 100,
            margin: 20,
          }}
        >
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 12,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Apply Promo
          </Text>
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontFamily: theme.font.fontLight,
              fontSize: 13,
              marginVertical: 6,
            }}
          >
            Special Instructions here
          </Text>
          <TextInput
            // value={purchaseOrderNumberState}
            onChangeText={(e) => {
              // setPurchaseOrderNumberState(e);
            }}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ReviewOrderScreen");
            // if (purchaseOrderNumberState?.length < 1) {
            //   setErrorText("This field is required");
            // } else {
            //   setErrorText("");
            //   navigation.navigate("ReviewOrderScreen");
            // }
          }}
          style={{
            backgroundColor: theme.colors.btncolor,
            paddingHorizontal: 0,
            paddingVertical: 5,
            width: 100,
            margin: 20,
          }}
        >
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 12,
              textAlign: "center",
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

export default PaymentMethodScreen;
