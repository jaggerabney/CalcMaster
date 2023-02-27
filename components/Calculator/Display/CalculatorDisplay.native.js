import { StyleSheet, View, Text } from "react-native";

export default function CalculatorDisplay(props) {
  return (
    <View style={styles.displayWrapper}>
      <View style={styles.display} />
      <Text style={styles.displayText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayWrapper: {
    height: "30%",
    padding: "5%",
  },
  displayText: {
    textAlign: "right",
    paddingRight: "2%",
    paddingTop: "2%",
    fontWeight: "bold",
  },
  display: {
    height: "100%",
    backgroundColor: "#efefef",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },
});
