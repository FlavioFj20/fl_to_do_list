import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid";

function App() {
  const [task, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programacao",
      description:
        "Estudar programacao para se tornar um desenvolvedor full stack.",
      isComplited: false,
    },
    {
      id: 2,
      title: "Estudar ingles",
      description:
        "Estudar ingles para se tornar um desenvolvedor full stack com vantagem no mercado",
      isComplited: false,
    },
    {
      id: 3,
      title: "Estudar programacao",
      description:
        "Estudar programacao para se tornar um desenvolvedor full stack.",
      isComplited: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = task.map((task) => {
      //Preciso actualizar a task
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted};
      }
      //Nao preciso actualizar a task
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskClickDelete(taskId) {
    const newTasks = task.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAddSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...task, newTask]);
  } 

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onTaskAddSubmit={onTaskAddSubmit}/>
        <Tasks tasks={task} onTaskClick={onTaskClick} onTaskClickDelete={onTaskClickDelete}/>
      </div>
    </div>
  );
}

export default App;
