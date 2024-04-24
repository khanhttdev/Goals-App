import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDeleteItem(text)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    justifyContent: "center",
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 8,
  },
});

export default GoalItem;
