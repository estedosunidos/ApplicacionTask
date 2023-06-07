import React, {useEffect,useState} from "react";
import {View,} from "react-native"
import {getTask} from '../api'
import {TaskList} from '../components/taskList'
import {Layaout} from '../components/layaout'
const HomeScreen= ()=>{
    const [tasks,setTask]=useState([])
    const loadTask=async()=>{
      const data= await getTask()
      setTask(data)
      console.log(data)

    }
    useEffect(()=>{
        loadTask()
        

    },[])
    return(
        <Layaout>
            <TaskList tasks={tasks}></TaskList>
           
        </Layaout>
    )
}
export default HomeScreen