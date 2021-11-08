import React from "react";
import { View, StyleSheet } from "react-native";
import { listItems } from "../Data/MockedData";
import ListItem from "./ListItem";

export default function WholeItems({
  items = listItems,
  textColor = "#252A31",
}) {
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
