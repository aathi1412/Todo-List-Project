export function TodoInputList({ task, setTask }){

    const deleteListItem = (id) => {
        setTask(prev => 
            prev.filter(taskItem => id !== taskItem.id)
        );
    }

    return(
        <>
            {task.map((taskItem) => {
                return(
                    <div 
                    key={taskItem.id} 
                    className="grid grid-cols-3 gap-x-2 items-center justify-items-center bg-indigo-500 ml-25 mr-25 p-5 rounded-2xl">
                        
                        <input type="checkbox" className="w-5 h-5 accent-blue-600 " />

                        <span className="">{taskItem.task}</span>

                        <button className=" bg-red-500 border px-4 py-2 rounded-xl cursor-pointer" onClick={() => {deleteListItem(taskItem.id)}}>
                            delete
                        </button>
                    </div>
                )
            })}
            
        </>
    )
}

export default TodoInputList;