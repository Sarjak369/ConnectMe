import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";

export default class HobbiesSelectionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      music: false,
      sports: false,
      reading: false,
      studying: false,
      engineering: false,
      fitness: false,
      gardening: false,
      painting: false,
      martial_arts: false,
      hiking: false,
      gaming: false,
      coding: false,
      cooking: false,
      eating: false,
      acting: false,
      photography: false,
      sewing: false,
      dancing: false,
      birdwatching: false,
      sleeping: false,
      nail_art: false,
      caligraphy: false,
      puzzles: false,
      writing: false,
      journaling: false,
      listening_to_podcasts: false,
      fishing: false,
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading_hobby_text}> Select Your Hobbies</Text>

        <View style={styles.list_of_checkbox}>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  music: !this.state.music,
                })
              }
              checked={this.state.music}
              title="Music"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  sports: !this.state.sports,
                })
              }
              checked={this.state.sports}
              title="Sports"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  studying: !this.state.studying,
                })
              }
              checked={this.state.studying}
              title="Studying"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  engineering: !this.state.engineering,
                })
              }
              checked={this.state.engineering}
              title="Engineering"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  fitness: !this.state.fitness,
                })
              }
              checked={this.state.fitness}
              title="Fitness"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  gardening: !this.state.gardening,
                })
              }
              checked={this.state.gardening}
              title="Gardening"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  painting: !this.state.painting,
                })
              }
              checked={this.state.painting}
              title="Painting"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  martial_arts: !this.state.martial_arts,
                })
              }
              checked={this.state.martial_arts}
              title="Martial Arts"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  hiking: !this.state.hiking,
                })
              }
              checked={this.state.hiking}
              title="Hiking"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  gaming: !this.state.gaming,
                })
              }
              checked={this.state.gaming}
              title="Gaming"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  coding: !this.state.coding,
                })
              }
              checked={this.state.coding}
              title="Coding"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  cooking: !this.state.cooking,
                })
              }
              checked={this.state.cooking}
              title="Cooking"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  eating: !this.state.eating,
                })
              }
              checked={this.state.eating}
              title="Eating"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  acting: !this.state.acting,
                })
              }
              checked={this.state.acting}
              title="Acting"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  photography: !this.state.photography,
                })
              }
              checked={this.state.photography}
              title="Photography"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  swewing: !this.state.sewing,
                })
              }
              checked={this.state.sewing}
              title="Sewing"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  dancing: !this.state.dancing,
                })
              }
              checked={this.state.dancing}
              title="Dancing"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  birdwatching: !this.state.birdwatching,
                })
              }
              checked={this.state.birdwatching}
              title="Birdwatching"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  sleeping: !this.state.sleeping,
                })
              }
              checked={this.state.sleeping}
              title="Sleeping"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  nail_art: !this.state.nail_art,
                })
              }
              checked={this.state.nail_art}
              title="Nail Art"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  caligraphy: !this.state.caligraphy,
                })
              }
              checked={this.state.caligraphy}
              title="Caligraphy"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  puzzles: !this.state.puzzles,
                })
              }
              checked={this.state.puzzles}
              title="Puzzles"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  writing: !this.state.writing,
                })
              }
              checked={this.state.writing}
              title="Writing"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  journaling: !this.state.journaling,
                })
              }
              checked={this.state.journaling}
              title="Journaling"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  listening_to_podcasts: !this.state.listening_to_podcasts,
                })
              }
              checked={this.state.listening_to_podcasts}
              title="Listening podcasts"
            />
          </View>
          <View style={styles.inputText}>
            <CheckBox
              style={styles.checkBox}
              checked={false}
              onPress={() =>
                this.setState({
                  fishing: !this.state.fishing,
                })
              }
              checked={this.state.fishing}
              title="Fishing"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("HomePage Screen")}
          style={styles.nextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003f5c",
  },
  list_of_checkbox: {
    flex: 1,
    backgroundColor: "#003f5c",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  heading_hobby_text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fb5b5a",
    marginTop: 20,
    marginLeft: 50,
    marginBottom: 30,
  },
  inputText: {
    height: 60,
    width: "50%",
  },
  checkBox: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
  nextBtn: {
    width: "30%",
    backgroundColor: "#fb5b5a",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 145,
  },
  nextText: {
    color: "white",
    fontSize: 25,
  },
});
