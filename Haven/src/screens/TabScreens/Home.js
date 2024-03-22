import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import DestinationModal from "../../components/modals/DestinationModal";
import { fetchDataFromCollection } from "../../functions/firestoreUpload";
import { useAuth } from "../../auth/authContext";
import { query, where, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import DestinationDetailModal from "../../components/modals/DestinationDetailModal";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [destinationsData, setDestinationsData] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);

  const { currentUser } = useAuth();
  const userId = currentUser.uid;
  const handleAddDestination = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // function that fetches destinations
  useEffect(() => {
    const fetchData = async () => {
      const fetchedDestinations = await fetchDataFromCollection(
        `users/${userId}/destinations`
      );
      setDestinationsData(fetchedDestinations);
    };

    fetchData();

    //onsnapshot listener
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

  // Function to render each destination
  const renderDestination = ({ item }) => (
    <TouchableOpacity
      style={styles.destinationItem}
      onPress={() => {
        setSelectedDestination(item);
        setIsDetailModalVisible(true);
      }}
    >
      <Text style={styles.destinationName}>{item.destinationName}</Text>
      <Text>{item.address}</Text>
      <Text>{item.numberOfPeople}</Text>
      <Text>{item.duration}</Text>
      <Text>TIMER HERE</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleAddDestination}
        style={styles.addNameButton}
      >
        <Text style={styles.addButtonText}>Add Destination</Text>
      </TouchableOpacity>
      <DestinationModal isVisible={isModalVisible} onClose={handleCloseModal} />

      <View>
        <FlatList
          data={destinationsData}
          renderItem={renderDestination}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <DestinationDetailModal
        isVisible={isDetailModalVisible}
        onClose={() => setIsDetailModalVisible(false)}
        destination={selectedDestination}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems:'center'
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
    margin:10,
    alignItems:'center'
  },
  destinationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
