import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducer = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(actions.doReset());
  };

  const increseBy = (value: number) => {
    dispatch(actions.doIncreseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer:</h1>

      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increseBy(1)}>+1</button>
      <button onClick={() => increseBy(5)}>+5</button>
      <button onClick={() => increseBy(10)}>+10</button>
    </>
  );
};
