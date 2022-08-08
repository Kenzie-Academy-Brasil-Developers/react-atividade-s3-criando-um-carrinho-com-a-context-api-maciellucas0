import "./App.css";
import { Counter } from "./components/counter/counter";
import { CounterControls } from "./components/counterControls/counterControls";

function App() {
  return (
    <>
      <Counter />
      <CounterControls />
    </>
  );
}

export default App;
