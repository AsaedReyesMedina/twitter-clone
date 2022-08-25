import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TwitProps } from "../interfaces/TwitInteface";
import TwitHeader from "./TwitHeader";
import TwitPicturesInfo from "./TwitPicturesInfo";
import TwitTextContet from "./TwitTextContet";
const Twit = ({ userName, tagName, datePost, textContent }: TwitProps) => {
  return (
    <View style={style.container}>
      <View style={style.pictures}>
        <TwitPicturesInfo />
      </View>
      <View style={style.texts}>
        <TwitHeader userName={userName} tagName={tagName} datePost={datePost} />
        <TwitTextContet textContent={textContent} />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: "grey",
    paddingBottom: 16,
  },
  pictures: {
    width: 80,
    flexDirection: "column",
    alignItems: "center",
  },
  texts: {
    flex: 1,
  },
});
export default Twit;
