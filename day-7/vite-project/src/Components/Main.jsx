import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, multiply, incrementByAmount } from "../redux/counter/counterSlice";
const Main = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
    return (
        <>
            <h1>Your Count: {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(multiply())}>Multiply</button>
            <button onClick={()=> dispatch(incrementByAmount(50))}>Increase by 50</button>
        </>
    )
}

export default Main