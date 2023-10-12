import { useAppSelector } from "./redux/hooks";

function ShowCounterValue() {
  const counterValue = useAppSelector((state) => state.counter.value);
  return <div>{counterValue}</div>;
}
export default ShowCounterValue;