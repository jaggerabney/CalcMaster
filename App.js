import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Calculator from "./components/Calculator/Calculator";
import { CalcContextProvider } from "./store/calc-context";

export default function App() {
  return (
    <CalcContextProvider>
      <View style={styles.container}>
        <Calculator />
        <StatusBar />
      </View>
    </CalcContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e2e2e",
    padding: "3%",
    paddingTop: "15%",
  },
});
