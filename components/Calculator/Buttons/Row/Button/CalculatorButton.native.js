import { StyleSheet, View, Text } from "react-native";

export default function CalculatorButton(props) {
  return (
    <View style={styles.button}>
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
