import React, { useState } from "react";
import { Text, Dimensions, TouchableOpacity, View } from "react-native";
import RoundCheckbox from "rn-round-checkbox";

import styles from "./List.styles";
const { height, width } = Dimensions.get("window");
export default function List({
  name,
  colorType,
  tasksAmount,
  onClickCallback = () => console.log(),
  active = false,
  scale = 0.7,
}) {
  const [isSelected, setIsSelected] = useState(true);

  let nameColor =
    (colorType === "#EBEFF5") | (colorType === "yellow") ? "black" : "white";
  let amount = tasksAmount > 1 ? `${tasksAmount} tasks` : `${tasksAmount} task`;
  const heightScale = scale * 0.1;
  const widthScale = scale;
  return (
    <TouchableOpacity
      style={{
        paddingLeft: 10,
        paddingRight: 15,
        marginBottom: 10,
        marginRight: 10,

        borderRadius: 10,
        backgroundColor: colorType,
        height: height * heightScale,
        width: width * widthScale,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onPress={() => onClickCallback(name, colorType)}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Text style={(styles.name, { color: nameColor })}>{name}</Text>
        <Text style={(styles.tasks_amount, { color: nameColor })}>
          {amount}
        </Text>
      </View>
      {active ? (
        <RoundCheckbox
          size={25}
          checked={isSelected}
          onValueChange={() => {
            setIsSelected(isSelected);
          }}
        />
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
}
