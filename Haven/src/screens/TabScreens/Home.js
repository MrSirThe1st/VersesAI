import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import DestinationModal from "../../components/modals/DestinationModal";
import DestinationDetailModal from "../../components/modals/DestinationDetailModal";
import { fetchDataFromCollection } from "../../functions/firestoreUpload";
import { useAuth } from "../../auth/authContext";
import { query, where, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import { LinearGradient } from "expo-linear-gradient";
import MIcon from "@expo/vector-icons/MaterialIcons";
import DailyVerse from "../../components/DailyVerse";
import Topics from "../../components/carroussel/Topics";
import Questions from "../../components/Questions";
import Notes from "../../components/Notes";

// Key for AsyncStorage

const Home = ({ navigation }) => {
  // State variables
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [destinationsData, setDestinationsData] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [timers, setTimers] = useState([]);
  const { currentUser } = useAuth();
  const userId = currentUser.uid;

  // Function to handle opening the add destination modal
  const handleAddDestination = () => {
    setIsModalVisible(true);
  };

  // Function to handle closing the destination modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Effect to fetch destinations
  useEffect(() => {
    const fetchData = async () => {
      const fetchedDestinations = await fetchDataFromCollection(
        `users/${userId}/destinations`
      );
      setDestinationsData(fetchedDestinations);
    };

    fetchData();

    // Firestore snapshot listener
    const q = query(collection(db, `destinations/${userId}/destinations`));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const destinationsData = [];

      querySnapshot.forEach((doc) => {
        destinationsData.push({ ...doc.data(), id: doc.id });
      });

      setDestinationsData(destinationsData);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.addButton} onPress={handleAddDestination}>
        <LinearGradient
          start={{ x: 0.01, y: 0.25 }}
          end={{ x: 0.99, y: 0.75 }}
          locations={[0.01, 0.99]}
          colors={["#d42c75", "#f7876b"]}
          style={styles.addButtonGradient}
        >
          <MIcon color={"#fff"} name="add" style={styles.addIcon} size={70} />
        </LinearGradient>
      </TouchableOpacity> */}
      <Text>Good Morning Username</Text>
      <DailyVerse />
      <Topics />
      <Questions/>
      <Notes/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor:"white"
  },
  addNameButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
  destinationItem: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 15,
    margin: 10,
    alignItems: "center",
  },
  destinationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
