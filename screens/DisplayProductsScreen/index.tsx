import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import FooterSection from "../../components/FooterSection";
import ModalDropdown from "react-native-modal-dropdown";
import { getProducts } from "../../store/services/product";
import { List } from "react-native-paper";

const DisplayProductsScreen = ({ route, navigation }: any) => {
  const { data } = route.params;
  const [getProductsData, setGetProductsData] = useState([]);
  const [expanded, setExpanded] = React.useState(true);
  const [getSeriesId, setGetSeriesId] = useState<any>([]);
  const [amplifierPowerState, setAmplifierPowerState] = useState<any>([]);
  const [sortModel, setSortModel] = useState(false);
  const [channelId, setChannelId] = useState<any>([]);

  const [selectSortType, setSelectSortType] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getProducts({
      pathParams: {
        id: data?._id,
      },
      query: {
        type: selectSortType === "Highest to Low" ? -1 : 1,
      },
    }).then((res: any) => {
      setGetProductsData(res?.products);
    });
  }, [data?._id, selectSortType]);

  const series = [...new Set(getProductsData?.map((i: any) => i.series))];
  const channels = [...new Set(getProductsData?.map((i: any) => i.channels))];
  const amplifierPower = [
    ...new Set(getProductsData?.map((i: any) => i.amplifierPower)),
  ];
  const handlePress = () => setExpanded(!expanded);
  const sortData = ["Highest to Low", "Low to high"];
  console.log(selectSortType);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        opacity: modal || sortModel === true ? 0.2 : 1,
      }}
    >
      <Modal visible={modal} transparent>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: "90%",
              padding: 20,
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: theme.font.fontMedium }}>
              Filter
            </Text>
            <List.Section>
              <List.Accordion
                title="Series"
                // left={(props) => <List.Icon {...props} icon="folder" />}
              >
                {series?.map((item: any) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      onPress={() => {
                        if (!getSeriesId?.includes(item)) {
                          setGetSeriesId([...getSeriesId, item]);
                        } else {
                          const data = getSeriesId?.filter((i) => i !== item);
                          setGetSeriesId(data);
                        }
                      }}
                      style={{
                        marginLeft: 20,
                        marginVertical: 10,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name={
                          getSeriesId?.includes(item)
                            ? "square"
                            : "square-outline"
                        }
                        size={20}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: theme.font.fontMedium,
                          marginLeft: 10,
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </List.Accordion>
            </List.Section>
            <List.Section>
              <List.Accordion
                title="Channels"
                // left={(props) => <List.Icon {...props} icon="folder" />}
              >
                {channels?.map((item: any) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      onPress={() => {
                        if (!channelId?.includes(item)) {
                          setChannelId([...channelId, item]);
                        } else {
                          const data = channelId?.filter((i) => i !== item);
                          setChannelId(data);
                        }
                      }}
                      style={{
                        marginLeft: 20,
                        marginVertical: 10,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name={
                          channelId?.includes(item)
                            ? "square"
                            : "square-outline"
                        }
                        size={20}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: theme.font.fontMedium,
                          marginLeft: 10,
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </List.Accordion>
            </List.Section>
            <List.Section>
              <List.Accordion
                title="Amplifiers"
                // left={(props) => <List.Icon {...props} icon="folder" />}
              >
                {amplifierPower?.map((item: any, index: any) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        if (!amplifierPowerState?.includes(item)) {
                          setAmplifierPowerState([
                            ...amplifierPowerState,
                            item,
                          ]);
                        } else {
                          const data = amplifierPowerState?.filter(
                            (i) => i !== item
                          );
                          setAmplifierPowerState(data);
                        }
                      }}
                      style={{
                        marginLeft: 20,
                        marginVertical: 10,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name={
                          amplifierPowerState?.includes(item)
                            ? "square"
                            : "square-outline"
                        }
                        size={20}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: theme.font.fontMedium,
                          marginLeft: 10,
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </List.Accordion>
            </List.Section>

            <TouchableOpacity
              style={{ alignSelf: "flex-end", marginTop: 20 }}
              onPress={() => {
                setModal(false);
                setGetSeriesId([]);
                setAmplifierPowerState([]);
                setChannelId([]);
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: "flex-end", marginTop: 20 }}
              onPress={() => {
                setModal(false);
              }}
            >
              <Text>View Result</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={sortModel} transparent>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: "90%",
              padding: 20,
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: theme.font.fontMedium }}>
              Sort
            </Text>
            {sortData?.map((item) => {
              return (
                <TouchableOpacity
                  key={item}
                  onPress={() => {
                    setSortModel(false);
                    setSelectSortType(item);
                  }}
                  style={{
                    marginLeft: 20,
                    marginVertical: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={selectSortType === item ? "square" : "square-outline"}
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: theme.font.fontMedium,
                      marginLeft: 10,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
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
          {/* {data.name} */}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: theme.font.fontLight,
            marginTop: 20,
          }}
        >
          {/* {data.products?.length} Results */}
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
            onPress={() => {
              setModal(true);
            }}
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
            onPress={() => {
              setSortModel(true);
            }}
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
          {getSeriesId?.length > 0 ||
          channelId?.length > 0 ||
          amplifierPowerState?.length > 0 ? (
            <>
              {getProductsData
                ?.filter((i: any) => {
                  return (
                    getSeriesId?.includes(i?.series) ||
                    channelId?.includes(i?.channels) ||
                    amplifierPowerState?.includes(i?.amplifierPower)
                  );
                })
                ?.map((item: any) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
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
                        onPress={() => {}}
                        style={{ position: "absolute", right: 20, zIndex: 10 }}
                      >
                        <Ionicons name="heart-outline" size={25} />
                      </TouchableOpacity>
                      <Image
                        source={{
                          uri:
                            item?.image ||
                            "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
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
                        <Text>Sku :{item.series}</Text>
                        <Text>Sku :{item.channels}</Text>
                        <Text>Sku :{item.amplifierPower}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </>
          ) : (
            <>
              {getProductsData?.map((item: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
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
                        uri:
                          item?.image ||
                          "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
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
                      <Text>Sku :{item.series}</Text>
                      <Text>Sku :{item.channels}</Text>
                      <Text>Sku :{item.price}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </View>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayProductsScreen;
