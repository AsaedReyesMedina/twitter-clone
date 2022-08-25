import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TwitProps } from "../interfaces/TwitInteface";

const TwitTextContet = ({ textContent }: TwitProps) => {
  return (
    <View style={style.constainer}>
      <Text>{textContent}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  constainer: {
    paddingTop: 4,
    paddingEnd: 8,
  },
});
export default TwitTextContet;
