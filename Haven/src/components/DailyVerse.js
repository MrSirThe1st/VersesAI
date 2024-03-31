import React from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const DailyVerse = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../assets/images/cross.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>The Bread of life</Text>
            <Text style={styles.subtitle}>Today's verse</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Read now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 0.9, 400);
const CARD_HEIGHT = Math.min(Dimensions.get("screen").width * 0.3, 400);

export default DailyVerse;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginHorizontal: 6,
    marginVertical: 6,
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    position: "relative",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#7dac9a",
    alignItems: "center",
    justifyContent: "center",
    width: CARD_WIDTH * 0.25,
    height: CARD_HEIGHT * 0.25,
    borderRadius: 50,
  },
  backgroundImage: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  cardContainer: {
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 1,
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  content: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    fontWeight:"500"
  },
});
