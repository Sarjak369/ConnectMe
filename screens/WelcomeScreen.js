import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  Pressable,
  navigation,
  route,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SignInScreen from "./SignInScreen";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/WelcomeScreenBg1.jpg")}>
      <Text style={styles.logoText}>Connect Me</Text>
      <View style={styles.getStartedStrip}>
        <Button
          onPress={() => navigation.navigate("SignIn Screen")}
          title="Get Started"
          color="#841584"
          //   color="#841584"
        />
      </View>
    </ImageBackground>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Welcome Screen</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  getStartedStrip: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    position: "absolute",
    top: 170,
    left: 90,
    backgroundColor: "greenyellow",
    height: 70,
    width: 250,
    padding: 10,
  },
});

export default WelcomeScreen;
