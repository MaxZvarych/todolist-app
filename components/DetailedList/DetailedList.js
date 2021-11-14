import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import styles from "./DetailedList.styles";
import CloseLine from "../../Images/close_line.svg";
import MarkerBlack from "../../Images/edit.svg";
import WholeItems from "../ListItem/WholeItems";

const { width, height } = Dimensions.get("window");

export default function DetailedList({ route, navigation }) {
  const { name, colorType, items } = route.params;
  const [amount, setAmount] = useState(0);
  const [elements, setItems] = useState([]);

  const nameColor =
    (colorType === "yellow") | (colorType === "#EBEFF5") ? "black" : "white";

  useEffect(() => {
    setAmount(items.filter((el) => el.colorType === colorType).length);
  });

  useEffect(() => {
    setItems(items.filter((el) => el.colorType === colorType));
  }, [colorType]);

  return (
    <View
      style={[
        styles.detailed_list,
        {
          backgroundColor: colorType,
          height: height * 0.8,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.close_line}
        title='Hide'
        onPress={() => navigation.goBack()}
      >
        <CloseLine />
      </TouchableOpacity>
      <View
        style={[
          styles.header_slide_panel,
          { width: width, height: height * 0.07 },
        ]}
      >
        <View style={[styles.header_info, { height: height * 0.07 }]}>
          <Text style={[styles.name, { color: nameColor }]}>{name}</Text>
          <Text style={[styles.tasks_amount, { color: nameColor }]}>
            {amount > 1 || amount == 0 ? `${amount} tasks` : `${amount} task`}
          </Text>
        </View>
        <MarkerBlack style={{ marginRight: 20 }} />
      </View>

      <WholeItems items={elements} textColor={nameColor} />
    </View>
  );
}
