import { StyleSheet, View } from "react-native";

import CalculatorRow from "./Row/CalculatorRow.native";

export default function CalculatorButtons(props) {
  return (
    <View style={styles.buttons}>
      <CalculatorRow values={["√", "x²", "^", "π"]} />
      <CalculatorRow values={["AC", "C", "%", "÷"]} />
      <CalculatorRow values={[7, 8, 9, "X"]} />
      <CalculatorRow values={[4, 5, 6, "—"]} />
      <CalculatorRow values={[1, 2, 3, "+"]} />
      <CalculatorRow values={[".", 0, "⌫", "="]} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    height: "70%",
    padding: "1%",
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
