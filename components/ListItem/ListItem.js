import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./ListItem.styles";
import RoundCheckbox from "rn-round-checkbox";

import AlarmClock from "../../Images/Alarm.svg";

function Alarm({ time }) {
  return (
    <View style={styles.alarm}>
      <AlarmClock />
      <Text style={styles.alarm_text}>{time}</Text>
    </View>
  );
}

export default function ListItem({ text, colorType, alarm }) {
  const [isSelected, setIsSelected] = useState(false);

  let opacity = isSelected ? 0.5 : 1;
  return alarm === false ? (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <RoundCheckbox
          style
          size={25}
          checked={isSelected}
          onValueChange={(newValue) => {
            setIsSelected(!isSelected);
          }}
        />
      </View>
      <View style={styles.info_wrapper}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 21,
            letterSpacing: -0.2,
            color: "#252A31",
            opacity: opacity,

            width: 250,
          }}
        >
          {text}
        </Text>
        <View style={styles.circle}>
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 16 / 2,
              backgroundColor: colorType,
            }}
          />
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <RoundCheckbox
          style
          size={25}
          checked={isSelected}
          onValueChange={(newValue) => {
            console.log(newValue);
            setIsSelected(!isSelected);
          }}
        />
      </View>
      <View style={styles.info_wrapper}>
        <View style={styles.alarm_wrapper}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 21,
              letterSpacing: -1,
              color: "#252A31",
              opacity: opacity,

              width: 250,
            }}
          >
            {text}
          </Text>
          <Alarm time={alarm.time} />
        </View>

        <View style={styles.circle}>
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 16 / 2,
              backgroundColor: colorType,
            }}
          />
        </View>
      </View>
    </View>
  );
}
