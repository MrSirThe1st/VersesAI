import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Topics = ({ navigation }) => {
  const topics = [
    {
      id: "0",
      name: "Anxious",
      text: "Find your personalized scripture",
    },
    {
      id: "1",
      name: "Insecure",
      text: "Find your personalized scripture",
    },
    {
      id: "2",
      name: "Conflicted",
      text: "Find your personalized scripture",
    },
    {
      id: "3",
      name: "Discouraged",
      text: "Find your personalized scripture",
    },
    {
      id: "4",
      name: "Peaceful",
      text: "Find your personalized scripture",
    },
    {
      id: "5",
      name: "Lonely",
      text: "Find your personalized scripture",
    },
    {
      id: "6",
      name: "Frustrated",
      text: "Find your personalized scripture",
    },
    {
      id: "7",
      name: "Overwhelmed",
      text: "Find your personalized scripture",
    },
    {
      id: "8",
      name: "Hopeful",
      text: "Find your personalized scripture",
    },
    {
      id: "10",
      name: "Nervous",
      text: "Find your personalized scripture",
    },
    {
      id: "11",
      name: "Motivated",
      text: "Find your personalized scripture",
    },
    {
      id: "12",
      name: "Tired",
      text: "Find your personalized scripture",
    },
    {
      id: "13",
      name: "Inspired",
      text: "Find your personalized scripture",
    },
    {
      id: "14",
      name: "Enthusiastic",
      text: "Find your personalized scripture",
    },
  ];

  const LinearGradientComponent = ({ children }) => (
    <LinearGradient
      start={{ x: 0.01, y: 0.25 }}
      end={{ x: 0.99, y: 0.9 }}
      locations={[0.6, 0.99]}
      colors={["#e0e7e1", "#a7d6b8"]}
      style={[
        styles.linearGradient,
        { width: imageWidth, height: imageHeight, borderRadius: 20 },
      ]}
    >
      {children}
    </LinearGradient>
  );

  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth / 2.5;
  const imageWidth = itemWidth - 24;
  const imageHeight = imageWidth * 0.8;

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>How are you feeling ?</Text>
        {/* <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Categories")}
        >
          <View style={styles.arrowContainer}>
            <Feather name="arrow-right-circle" size={24} color="#f7876b" />
          </View>
        </TouchableWithoutFeedback> */}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topics.map((topic) => (
          <Pressable
            style={[styles.pressable, { width: itemWidth }]}
            key={topic.id}
            onPress={() => navigation.navigate("CategoryScreen", { topic })}
          >
            <LinearGradientComponent>
              <Text style={styles.topicTitle}>{topic.name}</Text>
              <Text style={styles.topicName}>{topic.text}</Text>
              <FontAwesome name="arrow-right" size={20} color="#f3c283" />
            </LinearGradientComponent>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Topics;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  pressable: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  text: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 10,
  },
  arrowText: {
    margin: 12,
    fontWeight: "bold",
    color: "#1e90ff",
    fontSize: 15,
  },
  carrousselText: {
    padding: 5,
    fontWeight: "600",
    color: "white",
  },
  pressableImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    padding: 10,
    justifyContent: "space-evenly",
  },
  topicTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  topicName: {
    fontWeight: "300",
    fontSize: 12,
  },
});
