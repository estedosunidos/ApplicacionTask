import React from 'react';
import {View, Text,StyleSheet} from 'react-native'

const TaskOut =({task})=>{
    return(
        <View style={style.itemContainer}>
            <Text style={style.itemTitle}>{task.title}</Text>
            <Text  style={style.itemTitle}>{task.description}</Text>
        </View>
    )
}
const style=StyleSheet.create({
    itemContainer:{
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius:10
    },
    itemTitle:{
        color: "#fffff"
    }
})
export default TaskOut