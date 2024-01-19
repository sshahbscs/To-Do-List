import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count=0;

const Todo=()=>{

    
    const [task,settask]=useState([]);
    const currentTask=useRef(null);

    const saveData= ()=>{
            settask([...task,{no:count++,text:currentTask.current.value,display:""}])
            currentTask.current.value="";
            localStorage.setItem("todo-count",count);
    }

    const deleteTask = ()=>{
        let data = JSON.parse(localStorage.getItem("task"));
        // data=data.filter((task)=>task.no>count+1);
        data=[];
        settask(data);  
        }

    useEffect(()=>{
        settask(JSON.parse(localStorage.getItem("task")));
        count=localStorage.getItem("todo-count");
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(task);
        localStorage.setItem("task",JSON.stringify(task))
        },100);
    },[task])

    return (
            <div className="todo">
                <div className="header">
                    To-Do List
                </div>
                <div className="add-todo">
                    <input ref={currentTask} type="text" placeholder="Enter task for today" className="taskbar"/>
                    <button className="add-btn" onClick={saveData}>Add</button>
                </div>
                <div className="todo-list">
                    {task.map((item,index)=>{
                        return <TodoItems key={index} settask={settask} no={item.no} display={item.display} text={item.text} count={count}/>
                    })}
                </div>
                <button className="delete-btn" onClick={()=>{deleteTask()}}>Delete</button>
                
            </div>
    )
}
export default Todo;