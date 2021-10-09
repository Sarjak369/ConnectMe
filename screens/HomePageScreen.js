import React from "react";
import { Button, navigation, Text, View } from "react-native";

function HomePageScreen({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("AddConnectionsScreen")}
        title="Add Connection"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate("NotificationsScreen")}
        title="Notifications"
      />
    </View>
  );
}
export default HomePageScreen;
