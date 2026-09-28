import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
    const [DebounceValue, setDebounceValue] = useState(value || "")
    useEffect(() => {
       const timerID = setTimeout(()=>{
            setDebounceValue(value)
        }, delay)
        return () => {
            clearTimeout(timerID)
        }
    },[value])
    return DebounceValue;
}