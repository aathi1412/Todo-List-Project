export function TodoInputList({ task }){
    return(
        <>
            {task.map((taskItem, index) => {
                return(
                    <div 
                    key={index} 
                    className="grid grid-cols-3 gap-x-2 items-center justify-items-center bg-indigo-500 ml-25 mr-25 p-5 rounded-2xl">
                        
                        <input type="checkbox" className="w-5 h-5 accent-blue-600 " />

                        <span className="">{taskItem}</span>

                        <button className=" bg-red-500 border px-3 rounded-xl">
                            delete
                        </button>
                    </div>
                )
            })}
            
        </>
    )
}

export default TodoInputList;