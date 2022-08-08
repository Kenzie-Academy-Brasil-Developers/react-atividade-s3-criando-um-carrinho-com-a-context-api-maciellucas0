import { useContext } from "react";
import { CounterContext } from "../../contexts/context";

export const CounterControls = () => {
  const { aumentar, diminuir } = useContext(CounterContext);

  return (
    <>
      <div>
        <button onClick={aumentar}>+</button>
        <button onClick={diminuir}>-</button>
      </div>
    </>
  );
};
