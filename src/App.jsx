import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title"

function App() {
  const [task, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  // useEffect(() => {
  //   const fethTasks = async () => {
  //     //Chamer a API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users/1/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     //Pegar os dados que a api retorna
  //     const data = await response.json();

  //     //Persistir os dados no states
  //     setTasks(data);
  //   };
  //   //chamada da api para pegar as tarefas
  //   fethTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = task.map((task) => {
      //Preciso actualizar a task
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
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
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 overflow-auto">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de Tarefas
        </Title>
        <AddTask onTaskAddSubmit={onTaskAddSubmit} />
        <Tasks
          tasks={task}
          onTaskClick={onTaskClick}
          onTaskClickDelete={onTaskClickDelete}
        />
      </div>
    </div>
  );
}

export default App;
