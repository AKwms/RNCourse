import { StyleSheet, View, Text, Pressable } from "react-native";
//Note: bind used to send only the id without (text) since in RN you can't send only one object.

function GoalItem(props) {
  return (
    <View style={styles.goalsItems}>
      <Pressable 
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed}) => pressed && styles.pressedItem }
      >
        <Text style={styles.goalsText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalsItems: {
    margin: 8,
    padding: 10,
    borderRadius: 6, //if you used it in <Text> it will not be Radius in IOS so i used it on <View>
    backgroundColor: "#5e0acc",
  },

  goalsText: {
    color: "#FFFFFF", //if you used it in <View> the Text color will not be changed to white, so i used it in <Text>
  },

  pressedItem: {
    opacity: 0.5
  }
//opacity makes the item less clearance by half
});
