import './App.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [counter, setCounter] = useState(0);

const keyPressHandler = (event)=>{
  if(event.key === 'Enter'){
    const item = {'id':counter,'value':task}
    setTaskList([...taskList, item]);
    setTask("")
    setCounter(counter+1);
  }
}

const itemRemover = (e)=>{
  console.log(e.target.value)
  console.log(taskList);
  setTaskList(taskList.filter(item=>e.target.value !== item.id))
}

  return (
    <div className="App">
      <header className="App-header">
        <input className='element' type={"text"} placeholder='Type Here' value={task} onChange={e=>setTask(e.target.value)} onKeyPress={keyPressHandler}/>
        <ul >
          {taskList.map((e,index)=>{
          return <li key={index.toString()}>{e.value}<span className="close" onClick={itemRemover}  value={index}  >x</span></li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
