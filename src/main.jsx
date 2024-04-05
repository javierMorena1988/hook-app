import ReactDOM from "react-dom/client";
import "./index.css";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { HooksApp } from "./HooksApp.jsx";
// import { CounterApp } from "./01-useState/CounterApp.jsx";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook.jsx";

import "./index.css";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memo/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   // <React.StrictMode>
  <TodoApp />
  //   // </React.StrictMode>
);
