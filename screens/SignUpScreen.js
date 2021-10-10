import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  navigation,
  Alert,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";

export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      imgURL: "",
      userGender: "",
      userAge: "",
      userMovieGenre: "",
      userUniversity: "",
      userCity: "",
      userJobTitle: "",
      userIsStudent: false,
      userHobbies: "",
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logo}>Connect Me</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter image URL..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ imgURL: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Age..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ userAge: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Gender..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ userGender: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Movie Genre..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ userMovieGenre: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter City..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ userCity: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Job Title..."
              // placeholderTextColor="#003f5c"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({ userJobTitle: text })}
            />
          </View>

          <View style={styles.inputTextCheckbox}>
            <CheckBox
              style={styles.checkBoxStyle}
              checked={false}
              onPress={() =>
                this.setState({
                  userIsStudent: !this.state.userIsStudent,
                })
              }
              checked={this.state.userIsStudent}
              title="Are you a Student?"
            />
            {/* <Text>Is Student?</Text> */}
            {/* <Text>
              User is Student: {this.state.userIsStudent ? "👍" : "👎"}
            </Text> */}
          </View>

          {/* <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("HobbiesSelectionScreen")
            }
            style={styles.loginBtn}>
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
    marginTop: 20,
  },
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
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  loginText: {
    color: "white",
  },

  inputTextCheckbox: {
    height: 60,
  },
});
