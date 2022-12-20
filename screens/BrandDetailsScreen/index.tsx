import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import theme from "../../theme";

const BrandDetailsScreen = ({ route }: any) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header value={data.txt} />
      <View style={{ width: "90%", alignSelf: "center" }}>
        <View style={{ marginVertical: 30 }}>
          <Image
            source={{ uri: data.img2 }}
            style={{ width: "100%", height: 65, resizeMode: "cover" }}
          />
        </View>
        <View style={{}}>
          <Text
            style={{ fontFamily: theme.font.fontRobotoBlack, fontSize: 15 }}
          >
            {data.txt}
            <Text
              style={{ fontFamily: theme.font.fontSpaceMono, fontSize: 12 }}
            >
              {data.desc}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking?.openURL(data?.link);
          }}
          style={{
            width: 100,
            paddingVertical: 10,
            backgroundColor: "#0074c9",
            borderRadius: 10,
            alignSelf: "center",
            marginVertical: 30,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 12, textAlign: "center" }}>
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
      <FooterSection />
    </SafeAreaView>
  );
};

export default BrandDetailsScreen;
