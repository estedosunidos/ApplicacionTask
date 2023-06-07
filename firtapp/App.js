import React from "react";
import {Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  {TaskForm}   from './screen/taskForm'
import  {HomeScreen}   from './screen/homescreen'
const stack = createNativeStackNavigator()

const app =()=>{
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Homescreen" component={HomeScreen} options={({navigation})=>({ttitle:'Task App',headerStyle:{backgroundColor:"#222f3e"},
         headerTitleStyle:{color:"#fffff"}, headerRight:()=>(
          <TouchableOpacity onPress={()=>navigation.navigate('TaskFormScreen')}>
            <Text style={{color:'#fffff',marginRight:20,fontSize:15}}>New Task</Text>
          </TouchableOpacity>
         )})}/>
        <stack.Screen name="TaskFormScreen" component={TaskForm}
        options={{
          title:'create a Task',
          headerStyle: {
            backgroundColor:'#222f3e'
          },
          headerTitleStyle:{
            color:"#fffff"
          },
          headerTintColor:'#fffff',
        }}
        
        />
      </stack.Navigator>

    </NavigationContainer>
  )
}
export default app