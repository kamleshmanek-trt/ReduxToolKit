import React, {useState, useRef} from 'react';
import {
  SafeAreaView, KeyboardAvoidingView, FlatList, Text, View, 
  TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from '../../components/tasks';
import styles from './styles.js';
import {strings} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../redux/reducer/todoSlice';

const ToDoList = () => {
  const flatListRef = useRef();
  const [task, setTask] = useState();
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);

  const addTask = () => {
    if (task.trim().length > 0) {
      Keyboard.dismiss();
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity key={index}>
        <Task data={item} keyvalue={index} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'android' ? -270 : 10}>
        <View style={styles.tasksWrapper}>
          <View style={styles.headerBar}>
            <Text style={styles.sectionTitle}>{strings.todaysTasks}</Text>
          </View>
        </View>
        <FlatList
          ref={flatListRef}
          style={styles.listView}
          data={todo?.todos_list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onLayout={() => flatListRef?.current?.scrollToEnd({animated: true})}
        />
        <View style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={strings.writeTask}
            value={task}
            onChangeText={task => setTask(task)}
          />
          <TouchableOpacity style={styles.addWrapper} onPress={() => addTask()}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ToDoList;
