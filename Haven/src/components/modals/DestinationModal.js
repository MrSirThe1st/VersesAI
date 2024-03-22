import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { addDataToCollection } from "../../functions/firestoreUpload";
import { useAuth } from "../../auth/authContext";

const DestinationModal = ({ isVisible, onClose, userId }) => {
  const [destinationName, setDestinationName] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [namesOfPeople, setNamesOfPeople] = useState([]);
  const [duration, setDuration] = useState("");
  const [newName, setNewName] = useState("");
  const { currentUser} = useAuth();

  const handleAddName = () => {
    setNamesOfPeople([...namesOfPeople, newName]);
    setNewName("");
  };

  const handleSave = async () => {
    const destinationData = {
      destinationName,
      address,
      numberOfPeople,
      namesOfPeople,
      duration,
    };

    if (currentUser) {
      const uploadSuccess = await addDataToCollection(
        `destinations/${currentUser.uid}/destinations`,
        destinationData
      );

      if (uploadSuccess) {
        onClose();
      } else {
        // Handle upload failure
      }
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <TouchableOpacity onPress={onClose} style={styles.addNameButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Destination Name"
          value={destinationName}
          onChangeText={setDestinationName}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of People"
          value={numberOfPeople}
          onChangeText={setNumberOfPeople}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Duration (e.g., 2 hours)"
          value={duration}
          onChangeText={setDuration}
        />
        <View style={styles.namesContainer}>
          <TextInput
            style={styles.nameInput}
            placeholder="Add Name"
            value={newName}
            onChangeText={setNewName}
          />
          <TouchableOpacity onPress={handleAddName}>
            <Text style={styles.addNameButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleSave} style={styles.addNameButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default DestinationModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  namesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  nameInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  addNameButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
});
