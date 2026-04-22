import TodoListItems from "./TodoListItems";


export function TodoInputList({ task, setTask }){

    

    

    return(
        <>
            {task.map((taskItem) => {
                return(
                    <div 
                    key={taskItem.id} 
                    className="hover:bg-indigo-500 inset-shadow-sm shadow-md grid-cols-[0.5fr_3fr_0.5fr_0.5fr] grid gap-x-2 items-center justify-items-center max-[599px]:ml-10 max-[599px]:mr-10 py-3 px-2 rounded-2xl ">
                        
                        <TodoListItems task={task} setTask={setTask} taskItem={taskItem} />
                    </div>
                )
            })}
            
        </>
    )
}

export default TodoInputList;