import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "0",
    userName: "Sarjak Maniar",
  },
  {
    id: "1",
    userName: "Jai Parmani",
  },
  {
    id: "2",
    userName: "Nitin Wankwani",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      Hi, your connection is matched with {title}
    </Text>
  </View>
);

const NotificationsScreen = () => {
  const renderItem = ({ item }) => <Item title={item.userName} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,

    backgroundColor: "#003f5c",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default NotificationsScreen;
