import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducer } from "./counter-reducer/CounterReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15}></Counter>
      <hr />
      <CounterBy></CounterBy>
      <hr />
      <CounterEffect></CounterEffect>
      <hr />
      <CounterHook></CounterHook>
      <hr />
      <CounterReducer></CounterReducer>
    </>
  );
}

export default App;
