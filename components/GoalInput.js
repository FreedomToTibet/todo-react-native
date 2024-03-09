import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput({onAddGoal, visible, onCancel}) {

	const [enteredGoalText, setEnteredGoalText] = useState('');

	function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

	function onGoalHandler() {
		onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}

  return (
    <Modal visible={visible} animationType='slide' >
			<View style={styles.inputContainer}>
				<Image source={require('../assets/goal.png')} style={{width: 150, height: 150, marginBottom: 12}} />
				<TextInput
					placeholderTextColor={'white'}
					style={styles.textIput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
      	<View style={styles.buttonContainer}> 
					<View style={styles.button}><Button title="Add Goal" onPress={onGoalHandler} /></View>
					<View style={styles.button}><Button title="Cancel" color="red" onPress={onCancel} /></View>
				</View>
    	</View>
		</Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
  },
  textIput: {
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    padding: 8,
		color: 'white',
  },
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		marginTop: 12,
	},
	button: {
		width: 120,
		marginHorizontal: 8,
	}
});