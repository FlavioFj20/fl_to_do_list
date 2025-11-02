import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

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
      id: 1,
      title: "Estudar ingles",
      description:
        "Estudar ingles para se tornar um desenvolvedor full stack com vantagem no mercado",
      isComplited: false,
    },
    {
      id: 1,
      title: "Estudar programacao",
      description:
        "Estudar programacao para se tornar um desenvolvedor full stack.",
      isComplited: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={task} />
      </div>
    </div>
  );
}

export default App;
