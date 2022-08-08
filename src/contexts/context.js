import { createContext, useState } from "react";

export const CounterContext = createContext({});

export const Provider = ({ children }) => {
  const [conter, setCounter] = useState(0);

  function aumentar() {
    setCounter(conter + 1);
  }

  function diminuir() {
    setCounter(conter - 1);
  }

  return (
    <>
      <CounterContext value={(aumentar, diminuir, conter)}>
        {children}
      </CounterContext>
      ;
    </>
  );
};
