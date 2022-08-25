import React from "react";
import { Text, View } from "react-native";
import { TwitProps } from "../interfaces/TwitInteface";
import TwitHeader from "./TwitHeader";
const Twit = ({ userName, tagName, datePost }: TwitProps) => {
  return (
    <View>
      <TwitHeader userName={userName} tagName={tagName} datePost={datePost} />
    </View>
  );
};

export default Twit;
