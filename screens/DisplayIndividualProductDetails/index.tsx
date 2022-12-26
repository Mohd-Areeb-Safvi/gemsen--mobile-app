import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import theme from "../../theme";

const DisplayIndividualProductDetails = ({ route }: any) => {
  const { data } = route.params;
  console.log(data);
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" }}
    >
      <HeaderAfterLogin icon="menu" />
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: theme.font.fontMedium,
            fontSize: 15,
            letterSpacing: 2,
            paddingHorizontal: 20,
          }}
        >
          {data.productName}
        </Text>
        <View style={{ width: "100%" }}>
          <ScrollView horizontal>
            {data.productImage?.map((item, index) => {
              return (
                <View key={index} style={{}}>
                  <Image
                    source={{ uri: item }}
                    style={{
                      width: 250,
                      height: 400,
                      resizeMode: "cover",
                      alignSelf: "center",
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DisplayIndividualProductDetails;
