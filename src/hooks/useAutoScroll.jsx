import { useEffect, useRef } from "react";

export function useAutoScroll(dependencies){
    const inputListRef = useRef(null);

    useEffect(() => {
        const elem = inputListRef.current;
        if(elem){
            elem.scrollTop = elem.scrollHeight;
        }
    }, [dependencies]);
    
    return inputListRef;
}

export default useAutoScroll;