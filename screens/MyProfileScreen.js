import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AddConnectionsScreen from "./AddConnectionsScreen";

const userHobbies = [
  "music",
  "sports",
  "reading",
  "studying",
  "engineering",
  "fitness",
  "gardening",
  "painting",
  "martial arts",
  "hiking",
  "gaming",
  "coding",
  "cooking",
  "eating",
  "acting",
  "photography",
  "sweing",
  "dancing",
  "birdwatching",
  "sleeping",
  "nail art",
  "caligraphy",
  "puzzles",
  "writing",
  "journaling",
  "listening to podcasts",
];

export default class MyProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.props.route.params.name}</Text>
            <Text style={styles.info}>
              Email: {this.props.route.params.email}
            </Text>
            <Text style={styles.info}>Age: {this.props.route.params.age}</Text>
            <Text style={styles.info}>
              Gender: {this.props.route.params.gender}
            </Text>

            {/* <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text> */}
            <Text style={styles.description}>
              {userHobbies.map((h, index) => {
                return this.props.route.params.Hobbies.charAt(index) == "1" ? (
                  <Text>
                    - {h}
                    {"\n"}
                  </Text>
                ) : (
                  <Text></Text>
                );
              })}
            </Text>
            {/* <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonContainerText}>Hobbies</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonContainerText}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  header: {
    // backgroundColor: "#00BFFF",
    backgroundColor: "#003f5c",
    height: 50,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 75,
  },
  // name: {
  //   fontSize: 22,
  //   color: "#FFFFFF",
  //   fontWeight: "600",
  // },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    position: "absolute",
    top: 25,
    marginLeft: 35,
  },
  name: {
    fontSize: 28,
    // color: "#696969",
    color: "#fb5b5a",
    fontWeight: "600",
    marginTop: 75,
    // marginLeft: 70,
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 40,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    // backgroundColor: "#00BFFF",
    backgroundColor: "#003f5c",
  },
  buttonContainerText: {
    color: "white",
    fontSize: 17,
  },
});
