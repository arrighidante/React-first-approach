import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomhooks } from './03-examples/MultipleCustomhooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';
// import './index.css';


import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { AboutPage } from './09-useContext/AboutPage';
import { ErrorPage } from './09-useContext/ErrorPage';
import { HomePage } from './09-useContext/HomePage';
import { LoginPage } from './09-useContext/LoginPage';
import { MainApp } from './09-useContext/MainApp';



export const routes = {
  path: "/",
  element: <MainApp />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ],
};
const router = createBrowserRouter([routes]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // ALT1: Course format
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

  // ALT2: React Router recommended format
  // <RouterProvider router={ router }/>


  // </React.StrictMode>,
)
