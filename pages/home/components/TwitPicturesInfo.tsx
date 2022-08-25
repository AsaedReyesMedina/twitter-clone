import React from "react";
import { Image, Text, View } from "react-native";
import { TwitProps } from "../interfaces/TwitInteface";
const TwitPicturesInfo = ({ userImage }: TwitProps) => {
  return (
    <View>
      <Image source={require(userImage)} />
    </View>
  );
};
export default TwitPicturesInfo;
