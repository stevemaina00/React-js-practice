import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import List from './List';
import Welcome from './Welcome';
import Condition from './Condition';
import NoPage from './NoPage';
import Form from './Form';
import Timer from './Timer';
import Display from './Display'
 export default function App1(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome name="Steve" age="25" />} />
          <Route path="List" element={<List />} />
          <Route path="Condition" element={<Condition />} />
          <Route path="Form" element={<Form />} />
          <Route path="Timer" element={<Timer />} />
          <Route path="Display" element={<Display />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1 />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
