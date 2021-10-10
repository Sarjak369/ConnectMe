import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddConnectionsScreen from "./screens/AddConnectionsScreen";
import HomePageScreen from "./screens/HomePageScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import HobbiesSelectionScreen from "./screens/HobbiesSelectionScreen";
import MyProfileScreen from "./screens/MyProfileScreen";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn Screen" component={SignInScreen} />
        <Stack.Screen name="HomePage Screen" component={HomePageScreen} />
        <Stack.Screen
          name="AddConnectionsScreen"
          component={AddConnectionsScreen}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="HobbiesSelectionScreen"
          component={HobbiesSelectionScreen}
        />
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
