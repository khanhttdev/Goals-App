import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal !== id);
    });
  };

  return (
    <>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setIsAddMode(true)}
        />
        <GoalInput
          isAddMode={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={() => setIsAddMode(false)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item}
                id={itemData.index}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
