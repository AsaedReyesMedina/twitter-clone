import React from "react";
import { Image, Text, View } from "react-native";
import { TwitProps } from "../interfaces/TwitInteface";
const TwitPicturesInfo = (props: any) => {
  return (
    <View>
      <Image
        {...props}
        style={{ width: 50, height: 50, borderRadius: 50 }}
        source={require("../../../assets/img/asa.jpeg")}
      />
    </View>
  );
};
export default TwitPicturesInfo;
