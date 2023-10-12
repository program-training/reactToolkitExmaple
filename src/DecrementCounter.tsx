import { useAppDispatch } from "./redux/hooks";
import { decrement } from "./redux/counterSlice";
function DecrementCounter() {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  )
}
export default DecrementCounter;