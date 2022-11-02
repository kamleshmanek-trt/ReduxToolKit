import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Task = (props) => {
    const { data, keyvalue, deleteTask } = props;
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{data.task}</Text>
            </View>
        </View>
    )
}

export default Task;