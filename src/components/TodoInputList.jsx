import deleteIcon from "../assets/images/delete-icon.png";


export function TodoInputList({ task, setTask }){



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
            {task.map((taskItem) => {
                return(
                    <div 
                    key={taskItem.id} 
                    className="hover:bg-indigo-500 inset-shadow-sm shadow-md grid-cols-3 grid gap-x-2 items-center justify-items-center max-[599px]:ml-10 max-[599px]:mr-10 py-5 rounded-2xl ">
                        
                        <input 
                        type="checkbox" 
                        onChange={(event) => updateStatus(event, taskItem.id)}
                        className="w-5 h-5 accent-blue-600 " />

                        <span className={`${taskItem.status ? "line-through" : ""}`}>{taskItem.task}</span>

                        <button className="  rounded-xl cursor-pointer" onClick={() => {deleteListItem(taskItem.id)}}>
                            <img className="w-5 bg-red-400" src={deleteIcon} />
                        </button>
                    </div>
                )
            })}
            
        </>
    )
}

export default TodoInputList;