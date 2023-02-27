import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import CalculatorButtons from "./Buttons/CalculatorButtons.native";
import CalculatorDisplay from "./Display/CalculatorDisplay.native";
import CalcContext from "../../store/calc-context";

export default function Calculator() {
  const calcContext = useContext(CalcContext);

  return (
    <View style={styles.calculator}>
      <CalculatorDisplay title="CalcMaster" value={calcContext.value} />
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
