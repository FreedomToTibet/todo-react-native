import {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	};

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
		setModalIsVisible(false);
  };

	function cancelGoalHandler() {
		setModalIsVisible(false);
	};

  function removeGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
			<Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return (itemData.item.text && (
              <GoalItem
                text={itemData.item.text}
                onDeleteGoal={removeGoalHandler}
                id={itemData.item.id}
              />
            ));
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
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
