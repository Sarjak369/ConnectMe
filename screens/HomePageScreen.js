import React from "react";
import {
  Button,
  navigation,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from "react-native";

function HomePageScreen({ navigation }) {
  return (
    <ImageBackground
      // source={require("../assets/WelcomeScreenBg2.jpg")}
      source={require("../assets/HomeScreenBg.jpg")}
      style={styles.background}>
      <View>
        <TouchableHighlight style={styles.addConnectionBtn}>
          <Button
            // style={styles.addConnectionBtn}
            onPress={() => navigation.navigate("AddConnectionsScreen")}
            title="Add Connection"
            color="greenyellow"
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.notificationsBtn}>
          <Button
            // style={styles.notificationsBtn}
            onPress={() => navigation.navigate("NotificationsScreen")}
            title="Notifications"
            color="greenyellow"
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.myProfileBtn}>
          <Button
            // style={styles.myProfileBtn}
            onPress={() =>
              navigation.navigate({
                name: "MyProfileScreen",
                params: {
                  id: "1",
                  name: "Jai Parmani",
                  email: "jaiparmani35@gmail.com",
                  age: "21",
                  gender: "male",
                  city: "Mumbai",
                  job_title: "Tech Analyst",
                  movie_genre: "comedy",
                  isStudent: false,
                  university: "University of Mumbai",
                  Hobbies: "1010100",
                },
              })
            }
            title="My Profile"
            color="greenyellow"
          />
        </TouchableHighlight>
      </View>
    </ImageBackground>
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
  addConnectionBtn: {
    height: 40,
    width: 360,
    color: "greenyellow",
    position: "absolute",
    bottom: 250,
  },
  notificationsBtn: {
    height: 40,
    width: 360,
    color: "greenyellow",
    position: "absolute",
    bottom: 200,
  },
  myProfileBtn: {
    height: 40,
    width: 360,
    color: "greenyellow",
    position: "relative",
    bottom: 150,
  },
});
export default HomePageScreen;
