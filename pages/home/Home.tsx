import React from "react";
import { StyleSheet, View } from "react-native";
import Twit from "./components/Twit";
const Home = () => {
  return (
    <>
      <View style={HomeStyle.container}>
        <Twit
          userName="AsadeRM"
          tagName="@asaed_ed"
          datePost="21-08-2023"
          textContent="Nisi proident commodo laborum amet laborum esse incididunt qui pariatur."
        />
        <Twit
          userName="AsadeRM"
          tagName="@asaed_ed"
          datePost="21-08-2023"
          textContent="Officia duis quis reprehenderit minim irure occaecat ipsum duis consequat laboris quis non officia. Excepteur anim nisi non occaecat proident elit enim enim. Exercitation sunt mollit ex enim sit officia ut pariatur anim adipisicing occaecat quis. Qui sunt consequat magna eiusmod labore cupidatat nostrud duis commodo ad anim labore Lorem ullamco. Ad anim veniam ut commodo aliquip velit."
        />
      </View>
    </>
  );
};
const HomeStyle = StyleSheet.create({
  container: {},
});
export default Home;
