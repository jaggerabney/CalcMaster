import { StyleSheet, View } from "react-native";

import CalculatorButton from "./Button/CalculatorButton.native";

export default function CalculatorRow(props) {
  return (
    <View style={styles.buttonRow}>
      <CalculatorButton value={props.values[0]} />
      <CalculatorButton value={props.values[1]} />
      <CalculatorButton value={props.values[2]} />
      <CalculatorButton value={props.values[3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
