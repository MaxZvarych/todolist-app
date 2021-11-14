import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import List from "../../Lists/List";
import { lists } from "../../Data/ListsData";

const { width, height } = Dimensions.get("window");

export default function AddItemLists({
  defaultActive = "Inbox",
  changeActive,
}) {
  const [active, setActive] = useState(defaultActive);
  let onClickCallback = function (name, colorType) {
    setActive(name);
    changeActive(name, colorType);
  };
  return lists.map((item) => {
    return (
      <View style={[styles.lists]} key={item.id}>
        {active === item.name ? (
          <List
            name={item.name}
            colorType={item.colorType}
            tasksAmount={item.tasksAmount}
            onClickCallback={onClickCallback}
            active={true}
            scale={0.9}
          />
        ) : (
          <List
            name={item.name}
            colorType={item.colorType}
            tasksAmount={item.tasksAmount}
            onClickCallback={onClickCallback}
            scale={0.9}
          />
        )}
      </View>
    );
  });
}

const styles = StyleSheet.create({
  lists: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width,
    height: height * 0.1,
  },
});
