import { StyleSheet, View, Text, TextInput } from "react-native";
import { useFonts } from "expo-font";

import CalculatorButton from "./Button/CalculatorButton.native";

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
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <CalculatorButton value="√" />
          <CalculatorButton value="x²" />
          <CalculatorButton value="^" />
          <CalculatorButton value="π" />
        </View>
        <View style={styles.buttonRow}>
          <CalculatorButton value="AC" />
          <CalculatorButton value="C" />
          <CalculatorButton value="%" />
          <CalculatorButton value="÷" />
        </View>
        <View style={styles.buttonRow}>
          <CalculatorButton value="7" />
          <CalculatorButton value="8" />
          <CalculatorButton value="9" />
          <CalculatorButton value="X" />
        </View>
        <View style={styles.buttonRow}>
          <CalculatorButton value="4" />
          <CalculatorButton value="5" />
          <CalculatorButton value="6" />
          <CalculatorButton value="—" />
        </View>
        <View style={styles.buttonRow}>
          <CalculatorButton value="1" />
          <CalculatorButton value="2" />
          <CalculatorButton value="3" />
          <CalculatorButton value="+" />
        </View>
        <View style={styles.buttonRow}>
          <CalculatorButton value="." />
          <CalculatorButton value="0" />
          <CalculatorButton value="⌫" />
          <CalculatorButton value="=" />
        </View>
      </View>
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
  buttons: {
    height: "70%",
    padding: "1%",
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
