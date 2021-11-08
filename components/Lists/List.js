import React from "react";
import { Text, Dimensions, TouchableOpacity } from "react-native";

import styles from "./List.styles";

export default function List({
  name,
  colorType,
  tasksAmount,
  onClickCallback,
}) {
  let nameColor =
    (colorType === "#EBEFF5") | (colorType === "yellow") ? "black" : "white";
  let amount = tasksAmount > 1 ? `${tasksAmount} tasks` : `${tasksAmount} task`;
  const { height, width } = Dimensions.get("window");
  const heightScale = 0.07;
  const widthScale = 0.7;
  return (
    <TouchableOpacity
      style={{
        paddingLeft: 10,
        marginBottom: 10,
        marginRight: 10,

        borderRadius: 10,
        backgroundColor: colorType,
        height: height * heightScale,
        width: width * widthScale,

        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
      onPress={() => onClickCallback(name, colorType)}
    >
      <Text style={(styles.name, { color: nameColor })}>{name}</Text>
      <Text style={(styles.tasks_amount, { color: nameColor })}>{amount}</Text>
    </TouchableOpacity>
  );
}
