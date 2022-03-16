import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "../store/todoSlice";

export const CounterItem = () => {
    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state.todos.count);
    console.log(count)

    const dispatch = useDispatch();

    const onAddClick = () => {
        dispatch(incrementCount())
    }
    const onMinusClick = () => {
        dispatch(decrementCount())
    }
    return (
        <div>
            Count ={count}
            <button onClick={onAddClick}>Add+1</button>
            <button onClick={onMinusClick}>Minus-1</button>
        </div>
    );
}