import React from "react";
import {FlatList} from "react-native"
import TaskOut from './taskOut'
const TaskList= ({tasks})=>{
    const renderItem=({item})=>{
            return <TaskOut task={item}/>
    
}
    return(
        <FlatList 
            style={{width:'100%'}}
            data={tasks} 
            keyExtractor={(item)=>item.id+''}  
            renderItem={renderItem}
        ></FlatList>
    )
    }   
export default TaskList