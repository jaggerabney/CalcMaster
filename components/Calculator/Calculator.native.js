import { StyleSheet, View, Text, TextInput } from "react-native";

import CalculatorButtons from "./Buttons/CalculatorButtons.native";
import CalculatorDisplay from "./Display/CalculatorDisplay.native";

export default function Calculator() {
  return (
    <View style={styles.calculator}>
      <CalculatorDisplay title="CalcMaster" />
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
});
