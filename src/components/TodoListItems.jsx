import deleteIcon from "../assets/images/delete-icon.png";
import { useState } from "react";


export function TodoListItems({setTask, taskItem}){
    
    const [editingStatus, setEditingStatus] = useState(false);
    const [newTask, setNewTask] = useState(taskItem.task);

    
    const updateItems = () => {
        setNewTask(event.target.value);
        
        console.log(event.target.value);
    }
    const editItem = () => {

        if(editingStatus){
            setTask( prev => 
                prev.map( prevItem => prevItem.id === taskItem.id ? { ...prevItem , task: newTask } : prevItem)
            )
        }
        setEditingStatus(!editingStatus);
    }

    const updateItemsKeyBoardEvent = (event) => {
        
        if(event.key === 'Enter'){
            if(editingStatus){
                setTask( prev => 
                    prev.map( prevItem => prevItem.id === taskItem.id ? { ...prevItem , task: newTask } : prevItem)
                )
            }
            setEditingStatus(!editingStatus);
        }
    }
    const deleteListItem = (id) => {
        setTask(prev => 
            prev.filter(taskItem => id !== taskItem.id)
        );
    }

    const updateStatus = (event, id) => {
        
        setTask( prev => 
            prev.map(taskItem => 
                taskItem.id === id ? { ...taskItem, status: !taskItem.status } : taskItem
            )
        );
    }
    
    return(
        <>
            <input 
                type="checkbox" 
                onChange={(event) => updateStatus(event, taskItem.id)}
                className="w-5 h-5 accent-blue-600 " 
            />

            { editingStatus && <input type="text" value={newTask} onChange={updateItems} onKeyDown={updateItemsKeyBoardEvent} className="w-45 border" /> }

            { editingStatus || <span className={`${taskItem.status ? "line-through" : ""}`}>{taskItem.task}</span>}

            <button onClick={editItem}>
                {editingStatus ? 'Save' : 'Edit'}
            </button>

            <button className="rounded-xl cursor-pointer" onClick={() => {deleteListItem(taskItem.id)}}>
                <img className="w-5 bg-red-400" src={deleteIcon} />
            </button>
        </>
    )
}

export default TodoListItems;