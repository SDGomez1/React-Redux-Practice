import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, increment, decrement, amount } from "../features/counterSlice";

const Counter = () => {

    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [data, setData] = useState('')

    return (
        <>
            <h1>{count} </h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(amount(Number(data)))}>send data</button>
            <input onChange={(e) => (setData(e.target.value))}></input>
        </>
    )
}

export {Counter}