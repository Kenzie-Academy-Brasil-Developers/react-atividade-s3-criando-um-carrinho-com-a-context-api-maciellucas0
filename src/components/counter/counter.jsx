import { useContext } from "react";
import { CounterContext } from "../../contexts/context";

export const Counter = () => {
  const { conter } = useContext(CounterContext);

  return (
    <>
      <h1>{conter}</h1>
    </>
  );
};
