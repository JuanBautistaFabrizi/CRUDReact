import React from 'react';
import './App.css'
import TaskList from './_components/TaskList/TaskList';


function App() {
return (
    <div className="App">
      <TaskList header="Tareas del día" />
    </div>
  );
}

export default App;
