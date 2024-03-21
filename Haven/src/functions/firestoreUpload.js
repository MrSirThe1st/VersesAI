import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function addDataToCollection(collectionPath, data) {
  try {
    const collectionRef = collection(db, collectionPath);
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
    return true; // Indicate success
  } catch (error) {
    console.error("Error adding document: ", error);
    return false; // Indicate failure
  }
}