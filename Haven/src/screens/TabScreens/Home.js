import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DestinationModal from "../../components/modals/DestinationModal";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddDestination = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleAddDestination}
        style={styles.addNameButton}
      >
        <Text style={styles.addButtonText}>Add Destination</Text>
      </TouchableOpacity>
      <DestinationModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addNameButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
});
