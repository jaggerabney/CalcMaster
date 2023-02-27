import React, { useState } from "react";
import { ToastAndroid } from "react-native";
import { List, Item } from "linked-list";

export const values = {
  operands: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "π"],
  operators: ["⌫", "=", "+", "—", "X", "÷", "%", "C", "AC", "^", "x²", "√"],
};

export default CalcContext = React.createContext({
  value: undefined,
  operands: List,
  operators: List,
  addOperand: (operand) => {},
  addOperator: (operator) => {},
});

export function CalcContextProvider(props) {
  const [value, setValue] = useState(undefined);
  const [operands, setOperands] = useState(null);
  const [operators, setOperators] = useState(null);

  function addOperand(operand) {
    setValue((prevValue) => {
      if (!prevValue) {
        return Number(operand);
      }

      let prevValueAsString = prevValue.toString();

      prevValueAsString += operand.toString();

      return Number(prevValueAsString);
    });

    setOperands((prevOperands) => {
      if (!prevOperands) {
        return new List(new Item(Number(operand)));
      }

      return new List(...prevOperands.toArray(), new Item(Number(operand)));
    });
  }

  function addOperator(operator) {
    ToastAndroid.show(operator, ToastAndroid.SHORT);

    setOperators((prevOperators) => {
      if (!prevOperators) {
        return new List(new Item(operator));
      }

      return new List(...prevOperators.toArray(), new Item(operator));
    });
  }

  return (
    <CalcContext.Provider
      value={{
        value,
        operands,
        operators,
        addOperand,
        addOperator,
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
}
