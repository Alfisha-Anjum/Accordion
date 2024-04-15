import React, { useState } from 'react';
import './App.css';
import { FaPlus } from "react-icons/fa6";

const App = () => { 
const [data1, setData1] = useState(false);
const [data2, setData2] = useState(false);
const [data3, setData3] = useState(false);
const [data4, setData4] = useState(false);

  return (
    <>
    <h1>React Interview Question</h1>
    <div className="">What is the virtual Dom<button onClick={() =>
    setData1(!data1)}><FaPlus /></button>
    <div className={` ${data1 ? "" : "hidden"}`}><p>Hey my name is Alfisha</p></div>
    </div>
    <div>How do you create a react app<button onClick={()=>
    setData2(!data2)}><FaPlus /></button>
    <div className={` ${data2 ? "" : "hidden"}`}><p>My age is 20</p></div>
    </div>
    <div>What is an event in react<button onClick={()=>
    setData3(!data3)}><FaPlus /></button>
    <div className={` ${data3 ? "" : "hidden"}`}><p>Right nw i m pesuing computer prgramming course</p></div>
    </div>
    <div>What are components in react<button onClick={()=>
    setData4(!data4)}><FaPlus /></button>
    <div className={` ${data4 ? "" : "hidden"}`}><p>my hobby is dancing</p></div>
    </div>
  </>
  );
}

export default App;
