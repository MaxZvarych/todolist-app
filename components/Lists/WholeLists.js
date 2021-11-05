import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import List from "./List";
import { lists } from "../Data/ListsData";

export default function WholeLists() {
  return lists.map((item) => {
    return (
      <View style={styles.lists} key={item.id}>
        <List
          name={item.name}
          colorType={item.colorType}
          tasksAmount={item.tasksAmount}
        />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  lists: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
