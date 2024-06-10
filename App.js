import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
//to change the color of the StatusBar on the top of the screen

export default function App() {
  const [modalIsVisible, SetModalIsVisible] = useState(false);
  const [GoalsList, SetGoalsList] = useState([]);

  function startAddGoalHandler() {
    SetModalIsVisible(true);
  }

  function endAddGoalHandler() {
    SetModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    SetGoalsList((CurrentGoalsList) => {
      return CurrentGoalsList.filter((goal) => goal.id != id);
    });
  }
  //(goal) => goal.id != id) filter only the values with id dosn't equal the received id
  function addGoalHandler(enteredGoalText) {
    SetGoalsList((CurrentGoalsList) => [
      ...CurrentGoalsList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.AppContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          ShowModal={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          {/* keep in mind that i used inner ScrollView cuze its better try to delete outter <View> to see */}
          <FlatList
            data={GoalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1, // main view must take the hole screen
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },

  goalsContainer: {
    flex: 5,
  },
});
