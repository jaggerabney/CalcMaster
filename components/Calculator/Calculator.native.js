import { StyleSheet, View, Text, TextInput } from "react-native";
import { useFonts } from "expo-font";

import CalculatorButtons from "./Buttons/CalculatorButtons.native";

export default function Calculator() {
  const [loaded] = useFonts({
    Lato: require("../../assets/fonts/Lato.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.calculator}>
      <View style={styles.inputWrapper}>
        <View style={styles.input} />
        <Text style={styles.inputText}>CalcMaster</Text>
      </View>
      <CalculatorButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#ccc",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },
  inputWrapper: {
    height: "30%",
    padding: "5%",
  },
  inputText: {
    textAlign: "right",
    paddingRight: "2%",
    paddingTop: "2%",
    fontWeight: "bold",
  },
  input: {
    height: "100%",
    backgroundColor: "#efefef",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },
});
