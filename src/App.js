import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/actions";

function App({ local_value }) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>Count: {counter}</div>
      <button onClick={() => dispatch(increment(counter + 1))}>
        Increase Count
      </button>
      <button onClick={() => dispatch(decrement(counter - 1))}>
        Decrease Count
      </button>
      <button onClick={() => dispatch(reset(0))}>Reset</button>
    </div>
  );
}

export default App;
