import React from "react";
import { StyleSheet, View } from "react-native";
import Twit from "./components/Twit";
const Home = () => {
  return (
    <>
      <View style={HomeStyle.container}>
        <Twit userName="AsadeRM" tagName="@asaed_ed" datePost="21-08-2023" />
      </View>
    </>
  );
};
const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
  },
});
export default Home;
