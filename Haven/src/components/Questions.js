import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Questions = () => {
  // Sample data for the list
  const data = [
    { id: "1", title: "Question 1", description: "Description for question 1" },
    { id: "2", title: "Question 2", description: "Description for question 2" },
    { id: "3", title: "Question 3", description: "Description for question 3" },
    { id: "4", title: "Question 1", description: "Description for question 1" },
    { id: "5", title: "Question 2", description: "Description for question 2" },
    { id: "6", title: "Question 3", description: "Description for question 3" },
    // Add more items as needed
  ];

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  // Render each item in the list
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Feather name="arrow-right" size={24} color="#7dac9a" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    flex:1
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  separator: {
    height: 0.5,
    backgroundColor: "black",
    width: "90%",
  },
});
