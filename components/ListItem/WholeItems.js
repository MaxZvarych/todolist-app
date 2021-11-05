import React from "react";
import { View, StyleSheet } from "react-native";
import { listItems } from "../Data/MockedData";
import ListItem from "./ListItem";

export default function WholeItems() {
  return listItems.map((item, index) => {
    return (
      <View style={styles.todos} key={index}>
        <ListItem
          text={item.text}
          colorType={item.colorType}
          alarm={item.alarm}
        ></ListItem>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  todos: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
