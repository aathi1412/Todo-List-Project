export function TodoInputList({ task }){
    return(
        <>
            {task.map((taskItem, index) => {
                return(
                    <div key={index} className="grid grid-cols-3 gap-x-2 items-center justify-items-center">
                        <input className="" type="checkbox" />
                        <span className="">{taskItem}</span>
                        <button className=" bg-red-600">delete</button>
                    </div>
                )
            })}
            
        </>
    )
}

export default TodoInputList;