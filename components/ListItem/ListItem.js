import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./ListItem.styles";
import RoundCheckbox from "rn-round-checkbox";

import AlarmClock from "../../Images/Alarm.svg";
import Calendar from "../../Images/Calendar.svg";

function Alarm({ time, textColor }) {
  let clockData = time.split(" ")[0];
  let date = `${time.split(" ")[1]} ${time.split(" ")[2]} ${
    time.split(" ")[3]
  }`;

  return (
    <View style={styles.alarm}>
      <AlarmClock />
      <Text
        style={[
          styles.alarm_text,
          { color: textColor, width: 75, opacity: 0.5 },
        ]}
      >
        {clockData}
      </Text>
      {time.split(" ")[1] ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Calendar />
          <Text
            style={[
              styles.alarm_text,
              { color: textColor, width: 150, opacity: 0.5 },
            ]}
          >
            {date}
          </Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

export default function ListItem({
  text,
  colorType,
  alarm,
  textColor,
  withInput = false,
  inputSubmitCallback,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [inputText, setInputText] = useState(text);
  let opacity = isSelected ? 0.5 : 1;
  let inputOpacity = inputText === text ? 0.5 : 1;
  return alarm === false ? (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <RoundCheckbox
          style
          size={25}
          checked={isSelected}
          onValueChange={() => {
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
            color: textColor,
            opacity: opacity,

            width: 230,
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
          {withInput ? (
            <TextInput
              style={{
                fontSize: 18,
                lineHeight: 21,
                letterSpacing: -0.2,
                color: textColor,
                opacity: inputOpacity,
                width: 250,
              }}
              value={inputText}
              onChangeText={(text) => {
                setInputText(text);
                inputSubmitCallback(text);
              }}
            />
          ) : (
            <Text
              style={{
                fontSize: 18,
                lineHeight: 21,
                letterSpacing: -0.2,
                color: textColor,
                opacity: opacity,

                width: 250,
              }}
            >
              {text}
            </Text>
          )}
          <Alarm time={alarm.time} textColor={textColor} />
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
