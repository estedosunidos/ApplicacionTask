import React ,{useState} from "react";
import {Layaout} from '../components/layaout'
import { TextInput ,StyleSheet} from "react-native/types";
import {savetask} from '../api/api'
const TaskFormScreen= ({navigation})=>{
    const [task,setTask]=()=>({
        title:'',
        descriptiom:''
    })
    const handleChange=(name,value)=>setTask({...task,[name]:value})
    const handleSubmit=()=>{
        savetask(task)
        navigation.navigate('Homescreen')
    }
    return(
        <Layaout> 
            <TextInput
            style={style.input}
             placeholder="write a title "
             placeholderTextColor='#fffff'
             onChangeText={(text)=>handleChange('title',text)}
            />
            <TextInput
            style={style.input}
             placeholder="write a description"
             placeholderTextColor='#fffff'
             onChangeText={(text)=>handleChange('description',text)}
            />
            <TouchhableOpacity style={style.buttonSave} onPress={handleSubmit}>
                <Text style={style.buttonText}>Save Task</Text>
            </TouchhableOpacity>
        </Layaout>
    )
    }
    const style=StyleSheet.create(
        {
            input: {
                width: '90%',
                marginBottom:7,
                backgroundColor:'red',
                fontSize:14,
                borderWidth:1,
                borderColor:'#10ac84',
                height:35,
                color:'#fffff',
                textAlign:'center',
                borderRadius:5,
                padding: 4
            },
            buttonSave:{
                paddingTop:10 ,
                paddingBottom:10,
                borderRadius:5,
                marginBottom: 10,
                backgroundColor:'#10ac84',
                width:'90%'
            },
            buttonText:{
                color:'#fffff',
                teaxtAlign:'center',
            }

    })
export default TaskFormScreen