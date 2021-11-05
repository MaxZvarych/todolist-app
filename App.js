import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import WholeItems from "./components/ListItem/WholeItems";
import WholeLists from "./components/Lists/WholeLists";
import Plus from "./Images/Plus.svg";
import List from "./Images/List.svg";
import CloseLine from "./Images/close_line.svg";
import Checkbox from "./Images/Checkbox.svg";
import styles from "./App.styles";
import MarkerBlack from "./Images/edit.svg";
import SlidingUpPanel from "rn-sliding-up-panel";
import { listItems } from "./components/Data/MockedData";

function Menu() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menu_task}>
        <Checkbox />
        <Text style={styles.menu_text}>Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu_item}>
        <List />
        <Text style={styles.menu_text}>List</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [addData, setAddData] = useState(false);
  const [slidingPannel, setSlidingPannel] = useState(null);
  const [detailedListData, setDetailedListData] = useState({
    name: "Inbox",
    colorType: "grey",
  });

  let plusBgColor = addData ? "yellow" : "#FFFFFF";
  let plusRotateDegree = addData ? -45 : 0;

  let nameColor =
    (detailedListData.colorType === "yellow") |
    (detailedListData.colorType === "#EBEFF5")
      ? "black"
      : "white";

  let amount = listItems.filter(
    (el) => el.colorType === detailedListData.colorType
  ).length;

  let handlePlusPress = (event) => {
    setAddData(!addData);
  };

  let showListDetailed = (name, colorType) => {
    slidingPannel.show();
    setDetailedListData({ name, colorType });
  };

  const { width, height } = Dimensions.get("window");

  return (
    <ImageBackground
      source={{
        uri: "https://wallpapershome.com/images/pages/pic_h/23736.jpg",
      }}
      style={{
        height,
        width,
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* <View style={darkenedStyle}></View> */}
      <View>
        <ScrollView style={styles.container}>
          <StatusBar style='auto' />
          <Header />
          <WholeItems />
          <Text style={styles.text}> Lists</Text>
          <WholeLists onClickCb={showListDetailed} />
        </ScrollView>
        <SlidingUpPanel
          ref={(c) => setSlidingPannel(c)}
          draggableRange={{ top: height * 0.8, bottom: 0 }}
          height={height * 0.8}
        >
          <View
            style={[
              styles.detailed_list,
              {
                backgroundColor: detailedListData.colorType,
                height: height * 0.8,
                width: width,
                elevation: 1,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.close_line}
              title='Hide'
              onPress={() => slidingPannel.hide()}
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
                <Text style={[styles.name, { color: nameColor }]}>
                  {detailedListData.name}
                </Text>
                <Text style={[styles.tasks_amount, { color: nameColor }]}>
                  {amount > 1 || amount == 0
                    ? `${amount} tasks`
                    : `${amount} task`}
                </Text>
              </View>
              <MarkerBlack style={{ marginRight: 20 }} />
            </View>

            <WholeItems
              items={listItems.filter(
                (el) => el.colorType === detailedListData.colorType
              )}
              textColor={nameColor}
            />
          </View>
        </SlidingUpPanel>
        {addData ? (
          <View
            style={[
              styles.overlay,
              { height: height, width: width, elevation: 1 },
            ]}
          ></View>
        ) : (
          <View></View>
        )}
        {addData ? <Menu /> : <View></View>}

        <TouchableOpacity
          onPress={handlePlusPress}
          style={{
            position: "absolute",
            right: 15,
            bottom: 15,
            justifyContent: "center",
            alignItems: "center",

            elevation: 2,

            width: 56,
            height: 56,
            borderRadius: 56 / 2,
            backgroundColor: plusBgColor,
          }}
        >
          <Plus
            style={{
              transform: [{ rotate: `${plusRotateDegree}deg` }],
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
