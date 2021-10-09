import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HobbiesSelectionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hobbies: [
        { music: false },
        { sports: false },
        { reading: false },
        { studying: false },
        { engineering: false },
        { fitness: false },
        //   gardening: false,
        //   painting: false,
        //   martial_arts: false,
        //   hiking: false,
        //   gaming: false,
        //   coding: false,
        //   cooking: false,
        //   eating: false,
        //   acting: false,
        //   photography: false,
        //   sewing: false,
        //   dancing: false,
        //   birdwatching: false,
        //   sleeping: false,
        //   nail_art: false,
        //   caligraphy: false,
        //   puzzles: false,
        //   writing: false,
        //   journaling: false,
        //   listening_to_podcasts: false,
      ],
    };
  }
  render() {
    return (
      <View>
        <Text> Select Your Hobbies</Text>

        {this.state.hobbies.map((hobby, key) => console.log(Object.keys(key)))}

        {/* <View style={styles.inputText}>
          <CheckBox
            style={styles.checkBox}
            checked={false}
            onPress={() =>
              this.setState({
                userIsStudent: !this.state.userIsStudent,
              })
            }
            checked={this.state.userIsStudent}
            title="Are you a Student?"
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
});
