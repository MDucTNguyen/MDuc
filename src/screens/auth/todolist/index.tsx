import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Task={
    content: string;
    isEdit: boolean;
}
export default function TodoList() {
    const [task, setTask] = useState<string>('');
    const [listTask, setListTask] = useState<Task[]>([]);
    function handleAddTask(){
        setListTask([...listTask, {content: task, isEdit: false}]);
        setTask('');
    }
    function handleDeleteTask(index: number){
        setListTask(listTask.filter((item, i) => i !== index));
    }
    function handleEditTask( index: number){
        let newFakeListTask = [...listTask];
        newFakeListTask[index].isEdit = !newFakeListTask[index].isEdit;
        setListTask(newFakeListTask);
    }
    function handleEditContentTask(text: string, index: number){
        let newFakeListTask = [...listTask];
        newFakeListTask[index].content = text;
        setListTask(newFakeListTask);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoList</Text>
            <View style={styles.boxGroup}>
                <TextInput placeholder="Add a new task" style={styles.input} onChangeText={setTask} />
                <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
                    <Text style={styles.textButton}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listTask}>
                {listTask.map((item, index) => (
                    <View style={styles.boxGroup}>
                        {
                            item.isEdit ? 
                            <TextInput style={styles.input} value={item.content} onChangeText={(text) => handleEditContentTask(text, index)} /> :
                            <Text style={styles.textTask}>{item.content}</Text>
                        }
                        <Button title="Edit" onPress={() => handleEditTask(index)} />
                        <Button title="Delete" onPress={() => handleDeleteTask(index)} />           
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        gap: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    boxGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        width: '100%'
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10, // Cách trên dưới trái phải đều 10
        paddingLeft: 20,
        fontSize: 16
    },
    buttonAdd: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        width: 80,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textTask: {
        flex: 1,
        fontSize: 16
    },
    listTask: {
        flexDirection: 'column',
        gap: 10
    }
});