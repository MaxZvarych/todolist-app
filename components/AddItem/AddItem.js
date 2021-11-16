import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./AddItem.styles";
import AddItemHeader from "./AddItemHeader/AddItemHeader";
import Alarm from "../../Images/Alarm.svg";
import BlueAlarm from "../../Images/BlueAlarm.svg";
import Calendar from "../../Images/Calendar.svg";
import BlueCalendar from "../../Images/BlueCalendar.svg";
import AddItemLists from "./AddItemLists/AddItemLists";
import CalendarPicker from "react-native-calendar-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import ListItem from "../ListItem/ListItem";
import { bindActionCreators } from "redux";
import { changeToDos } from "../../redux/actions/todos";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");
const today = new Date();

function AddItem({ navigation, changeToDos, todos }) {
  const [chosenList, setChosenList] = useState({
    name: "Inbox",
    colorType: "#EBEFF5",
  });

  const [filterMode, setFilterMode] = useState("List");
  const [showPickTime, setShowPickTime] = useState(false);
  const [date, setDate] = useState({
    day: today.toLocaleDateString().split("/")[0],
    month: today.toLocaleDateString().split("/")[1],
    year: today.toLocaleDateString().split("/")[2],
  });
  const [time, setTime] = useState({ time: "10:00" });

  let onTimeChange = (time) => {
    if (time.type === "dismissed") {
      setFilterMode("List");
    }
    if (time.type === "set") {
      let hour = time.nativeEvent.timestamp.getHours();
      let minute = time.nativeEvent.timestamp.getMinutes();
      setTime({ time: `${hour}:${minute}` });
    }

    setShowPickTime(false);
  };

  let onDateChange = (date) => {
    let day = date.toString().split(" ")[2];
    let month = date.toString().split(" ")[1];
    let year = date.toString().split(" ")[3];
    setDate({ day, month, year });
  };

  let changeActive = (name, colorType) => setChosenList({ name, colorType });
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState({
    id: Math.floor(Math.random() * (1000000 - 10 + 1) + 10),
    colorType: chosenList.colorType,
    text: "",
    alarm: { time: `${time.time} ${date.day} ${date.month} ${date.year}` },
  });

  useEffect(() => {
    setTodo({
      id: Math.floor(Math.random() * (1000000 - 10 + 1) + 10),
      colorType: chosenList.colorType,
      text: inputText,
      alarm: {
        time: `${time.time} ${date.day} ${date.month} ${date.year}`,
      },
    });
  }, [inputText]);

  return (
    <View style={[styles.container, { height }]}>
      <AddItemHeader
        navigation={navigation}
        changeToDos={changeToDos}
        todos={todos}
        item={todo}
      />
      <View style={[styles.content_wrapper, { height: height * 0.4 }]}>
        <ListItem
          alarm={{
            time: `${time.time} ${date.day} ${date.month} ${date.year}`,
          }}
          text='What do you want to do?'
          colorType={chosenList.colorType}
          withInput={true}
          textColor='black'
          inputSubmitCallback={(text) => {
            console.log(text);
            setInputText(text);
          }}
        />
      </View>
      <View style={[styles.filter_wrapper, { height: height * 0.52 }]}>
        <View style={[styles.filter_header, { width, height: height * 0.07 }]}>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => setFilterMode("Calendar")}>
              {filterMode === "Calendar" ? <BlueCalendar /> : <Calendar />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowPickTime(true)}>
              {filterMode === "Time" ? <BlueAlarm /> : <Alarm />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.chosen_list]}
            onPress={() => setFilterMode("List")}
          >
            <Text style={styles.text_chosen_list}>{chosenList.name}</Text>
            <View style={styles.circle}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 12 / 2,
                  marginLeft: 10,
                  backgroundColor: chosenList.colorType,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        {filterMode === "List" ? (
          <ScrollView style={styles.lists}>
            <AddItemLists changeActive={changeActive}></AddItemLists>
          </ScrollView>
        ) : filterMode === "Calendar" ? (
          <ScrollView style={styles.lists}>
            <CalendarPicker date={date} onDateChange={onDateChange} />
          </ScrollView>
        ) : (
          <View></View>
        )}
        {showPickTime ? (
          <DateTimePicker
            testID='TimePicker'
            value={new Date()}
            mode='time'
            is24Hour={true}
            display='spinner'
            onChange={onTimeChange}
          />
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeToDos,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  const { todos } = state;
  return { todos };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
