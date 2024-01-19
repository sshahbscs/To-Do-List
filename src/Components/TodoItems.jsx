import "./CSS/TodoItems.css";
import tick from "./Assets/check_12484055.png";
import circle from "./Assets/circle_3964477.png"
import cross from "./Assets/close_12484191.png"

const TodoItems = ({no,display,text,settask,count})=>{

    const toggle=(no)=>{
        let data =JSON.parse(localStorage.getItem("task"));
        for(let i=0; i<data.length; i++){
            if(data[i].no ===no){
                if(data[i].display===""){
                    data[i].display="line-through";
                }
                else{
                    data[i].display="";
                }
                break;
            }
        }
        settask(data);
    }

    const removeTask = (no)=>{
        let data = JSON.parse(localStorage.getItem("task"));
        data=data.filter((task)=>task.no!==no);
        settask(data);  
        }


    return(
        <div className="todo-items">
            <div className={`todo-items-container ${display}`}>
                {display==""?
                <img  src={circle} onClick={()=>{toggle(no)}}/>:
                <img src={tick} onClick={()=>{toggle(no)}}/>}
                <div className="todo-items-text"  onClick={()=>{toggle(no)}}>
                {text}
                </div>
            </div>
            
            <img className="cross-img" src={cross} onClick={()=>{removeTask(no)}} />
            

        </div>
    );
}

export default TodoItems;