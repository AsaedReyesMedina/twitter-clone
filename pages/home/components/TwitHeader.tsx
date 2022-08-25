import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TwitProps } from "../interfaces/TwitInteface";

const TwitHeader = ({ userName, tagName, datePost }: TwitProps) => {
  return (
    <View style={TwitHeaderStyle.container}>
      <Text>{userName}</Text>
      <Text>{tagName}</Text>
      <Text>{datePost}</Text>
    </View>
  );
};
const TwitHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around",
    alignItems: "flex-start",
  },
});
export default TwitHeader;
