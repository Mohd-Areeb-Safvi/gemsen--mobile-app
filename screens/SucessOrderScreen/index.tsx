import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import { ScrollView } from "react-native-gesture-handler";

const SucessOrderScreen = () => {
  return (
    <SafeAreaView>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <Text>Thank you for your order</Text>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SucessOrderScreen;
