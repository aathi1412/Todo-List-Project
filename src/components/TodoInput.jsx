import { useState } from "react";
import TodoInputList from './TodoInputList'


export function TodoInput(){
    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);

    const getInput = (event) => {
        setInput(event.target.value);
    }

    const addTask = () => {
        if(!input.trim()) return;

        setTask(prev => 
            [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    task: input,
                    status: false
                }
            ]
        );
        setInput('');
    };

    const clickToAddTask = (event) => {
        if(event.key === 'Enter'){
            if(!input.trim()) return;

            setTask(prev => 
                [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        task: input,
                        status: false
                    }
                ]
            );
            setInput('');
        }
    };

    return(
        <>
            <div className="flex items-center justify-center h-50">

                <input 
                    type="text" 
                    placeholder="Enter your Task" 
                    value = {input}
                    onChange={getInput}
                    onKeyDown={clickToAddTask}
                    className="max-[599px] flex flex-1 max-w-2xl ml-25 border border-black p-3 rounded-xl"
                />

                <button 
                    onClick={addTask}
                    className="bg-black text-white ml-10 mr-30 p-2 w-20 rounded-xl cursor-pointer">
                    Add
                </button>

            </div>

            <div className="grid gap-x-4 gap-y-4 max-[1150px]:grid-cols-2 max-[599px]:grid-cols-1 min-[600px]:gap-y-12 min-[1000px]:grid-cols-3 
            ml-5 mr-5">
                <TodoInputList task = {task} setTask={setTask} />
            </div>
        </>
    )
}

export default TodoInput;