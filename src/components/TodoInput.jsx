import { useState } from "react";
import TodoInputList from './TodoInputList'


export function TodoInput(){
    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);

    const getInput = (event) => {
        setInput(event.target.value);
    }

    const addTask = () => {
        console.log(input);
        setTask([
            ...task,
            input
        ]);
        setInput('');
    }

    return(
        <>
            <div className="flex items-center justify-center h-50">

                <input 
                    type="text" 
                    placeholder="Enter your Task" 
                    value = {input}
                    onChange={getInput}
                    className="flex-1 ml-30 border border-black p-2 w-120"
                />

                <button 
                    onClick={addTask}
                    className="bg-black text-white ml-10 mr-30 p-2 w-20">
                    Add
                </button>

            </div>

            <div className="grid gap-y-4">
                <TodoInputList task = {task} />
            </div>
        </>
    )
}

export default TodoInput;