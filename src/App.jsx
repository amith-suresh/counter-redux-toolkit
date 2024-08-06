import { useSelector} from "react-redux";
import { increment } from "./fearures/counterSlice";
import { useDispatch } from "react-redux";
import { decrement } from "./fearures/counterSlice";
import { reset } from "./fearures/counterSlice";


function App() {

  const {count1}=useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return (
    <>
    <h1>redux tool-kit</h1>  
    <h2>Count:{count1}</h2>
    <button onClick={()=>dispatch(increment())}>Increment</button> 
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

export default App
