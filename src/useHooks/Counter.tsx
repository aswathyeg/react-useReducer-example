//eg to useReducer

import *as React from "react";
import './Counter.css';
const initialState = { count: 0 };
type ACTIONTYPE =
  { type: 'increment', payload: number }
  | { type: 'decrement', payload: string }

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const add = () => {
    dispatch({ type: 'increment', payload: 1 })
  }

  const substract = () => {
    dispatch({ type: 'decrement', payload: '1' })
  }

  return (
    <div className="heading">

      <h2>Counter</h2>
      <div>
        Count:{state.count}
      </div>
      <div className="button">
        <button onClick={add}>Increment</button>
        <button onClick={substract}>Decrement</button>
      </div>

    </div>

  );
}
export default Counter;