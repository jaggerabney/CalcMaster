import { useContext } from "react";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";

import CalcContext from "../../../../../store/calc-context";

export default function CalculatorButton(props) {
  const values = {
    operands: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "π"],
    operators: ["⌫", "=", "+", "—", "X", "÷", "%", "C", "AC", "^", "x²", "√"],
  };

  const calcContext = useContext(CalcContext);

  function clickHandler() {
    const value = props.value.toString();

    if (values.operands.includes(value)) {
      calcContext.addOperand(value);
    } else if (values.operators.includes(value)) {
      calcContext.addOperator(value);
    }
  }

  return (
    <View onTouchStart={clickHandler} style={styles.button}>
      <Text style={styles.buttonText}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "#efefef",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    width: "20%",
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
