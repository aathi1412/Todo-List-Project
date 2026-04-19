import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue){

    const [value, setValue] = useState(() => {
        try{
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(localStorage.getItem(key)) : initialValue;
        }
        catch(error){
            console.error("error reading localStorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch(error){
            console.error("error writing localStorage", error);
        }
    }, [key, value]);

    return[value, setValue];
    
}

export default useLocalStorage;