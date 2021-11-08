import { StatusBar } from "expo-status-bar";

import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../Header/Header";
import WholeItems from "../ListItem/WholeItems";
import WholeLists from "../Lists/WholeLists";
import styles from "../../App.styles";

export default function Home({ navigation }) {
  let showListDetailed = (name, colorType) => {
    navigation.navigate("DetailedList", {
      name,
      colorType,
    });
  };
  return (
    <View>
      <ScrollView style={styles.container}>
        <StatusBar style='auto' />
        <Header />
        <WholeItems />
        <Text style={styles.text}> Lists</Text>
        <WholeLists onClickCallback={showListDetailed} />
      </ScrollView>
    </View>
  );
}
