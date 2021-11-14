import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("toDoItems");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
export default function WholeItems({ items, textColor = "#252A31" }) {
  return items.map((item, index) => (
    <View style={styles.todos} key={index}>
      <ListItem
        text={item.text}
        colorType={item.colorType}
        alarm={item.alarm}
        textColor={textColor}
      ></ListItem>
    </View>
  ));
}

const styles = StyleSheet.create({
  todos: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
