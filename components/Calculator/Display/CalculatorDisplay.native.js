import { StyleSheet, View, Text } from "react-native";

export default function CalculatorDisplay(props) {
  return (
    <View style={styles.displayWrapper}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{props.value}</Text>
      </View>
      <Text style={styles.displayTitleText}>{props.title}</Text>
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
    paddingRight: "5%",
    fontSize: 72,
  },
  displayTitleText: {
    textAlign: "right",
    paddingRight: "2%",
    paddingTop: "2%",
    fontWeight: "bold",
  },
  display: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#efefef",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
  },
});
