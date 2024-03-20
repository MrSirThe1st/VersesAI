import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./src/auth/authContext";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

