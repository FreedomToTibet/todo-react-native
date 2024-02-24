import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer} >
			<View style={styles.inputContainer} >
				<TextInput style={styles.textIput} placeholder="Your course goal!" />
				<Button title="Add Goal" />
			</View>
			<View style={styles.goalsContainer} >
				<Text>List of goals...</Text>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: 'black'
	},
	textIput: {
		width: '60%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 8
	},
	goalsContainer: {
		flex: 5,
		// justifyContent: 'center',
		// alignItems: 'center'
	}
});
