import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TwitProps } from "../interfaces/TwitInteface";

const TwitHeader = ({ userName, tagName, datePost }: TwitProps) => {
  return (
    <View style={style.container}>
      <Text style={[style.userNameText, { paddingEnd: 4 }]}>{userName}</Text>
      <Text style={[style.tagNameText, { paddingRight: 8 }]}>
        {tagName} • {datePost}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    fontSize: 14,
  },
  userNameText: {
    fontWeight: "700",
  },
  tagNameText: {
    color: "#71767b",
    fontSize: 14,
    lineHeight: 19,
  },
});
export default TwitHeader;
