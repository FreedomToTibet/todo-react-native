import {View, Text, StyleSheet, Pressable, Button} from 'react-native';

function GoalItem({text, onDeleteGoal, id}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={onDeleteGoal.bind(this, id)}
				style={({pressed}) => pressed ? styles.pressedItem : null}
      >
        <Text style={{color: 'white', padding: '8px'}}>{text}</Text>
      </Pressable>
			<View><Button title="Edit" /></View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
    color: 'white',
    margin: 8,
		padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
	pressedItem: {
		opacity: 0.5,
		flex: 1,
	},
});
