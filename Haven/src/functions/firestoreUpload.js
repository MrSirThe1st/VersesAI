import { db } from "../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

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

export async function fetchDataFromCollection(collectionPath) {
  try {
    const collectionRef = collection(db, collectionPath);
    const querySnapshot = await getDocs(collectionRef);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
}

// export async function fetchDestinations(userId) {
//   try {
//     const destinationsCollectionRef = collection(
//       db,
//       `users/${userId}/destinations`
//     );
//     const querySnapshot = await getDocs(destinationsCollectionRef);
//     const destinationsData = [];

//     querySnapshot.forEach((doc) => {
//       destinationsData.push({ ...doc.data(), id: doc.id }); // Include document ID
//     });

//     return destinationsData;
//   } catch (error) {
//     console.error("Error fetching destinations: ", error);
//     return []; // Return an empty array on error
//   }
// }