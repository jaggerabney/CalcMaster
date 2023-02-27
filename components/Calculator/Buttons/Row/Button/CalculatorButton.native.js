import { useContext } from "react";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";

import CalcContext, { values } from "../../../../../store/calc-context";

export default function CalculatorButton(props) {
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
