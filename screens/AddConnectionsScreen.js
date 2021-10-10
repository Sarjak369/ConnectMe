import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import Icon from "react-native-vector-icons/Ionicons";
import OthersProfileScreen from "./OthersProfileScreen";
const Users = [
  {
    id: "1",
    name: "Jai Parmani",
    email: "jaiparmani35@gmail.com",
    age: "21",
    gender: "Male",
    city: "Mumbai",
    job_title: "Tech Analyst",
    movie_genre: "comedy",
    isStudent: false,
    university: "University of Mumbai",
    Hobbies: "10000010101011010010100010",
  },
  {
    id: "2",
    name: "Sarjak Maniar",
    email: "sarjakmaniar369@gmail.com",
    age: "21",
    gender: "Male",
    city: "Mumbai",
    job_title: "Student",
    movie_genre: "comedy",
    isStudent: true,
    university: "University of Mumbai",
    Hobbies: "01010010000011011010100010",
  },
  {
    id: "3",
    name: "Nitin Wankwani",
    email: "nitinwankwani@gmail.com",
    age: "21",
    gender: "Male",
    city: "Mumbai",
    job_title: "Student",
    isStudent: true,
    movie_genre: "horror",
    university: "University of Mumbai",
    Hobbies: "00100100101001010100101001",
  },
];

export default class AddConnectionsScreen extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-30deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    });
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
              },
            ]}>
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}>
                LIKE
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  color: "red",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}>
                NOPE
              </Text>
            </Animated.View>
            {/* <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20,
              }}
              source={item.uri}
            /> */}
            {/* <Text> {item.name} </Text> */}
            {/* <MyProfileScreen name={item.name} /> */}
            {/* <MyProfileScreen UserData={Users} /> */}

            <OthersProfileScreen userData={item} />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
              },
            ]}>
            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}>
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000,
              }}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  color: "red",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}>
                NOPE
              </Text>
            </Animated.View>

            {/* <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20,
              }}
              source={item.uri}
            /> */}
            {/* <Text> Hello </Text> */}
            <OthersProfileScreen userData={item} />
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}></View>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{ height: 60 }}></View>
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
    height: 200,
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
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    position: "absolute",
    top: 25,
  },
  name: {
    fontSize: 28,
    // color: "#696969",
    color: "#fb5b5a",
    fontWeight: "600",
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
    width: 200,
    borderRadius: 30,
    // backgroundColor: "#00BFFF",
    backgroundColor: "#003f5c",
  },
  buttonContainerText: {
    color: "white",
    fontSize: 17,
  },
});
