import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-slate-900 p-6 rounded-md shadow-md">
      <h2 className="text-white text-2xl font-bold mb-4">Adicionar Tarefa</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/* <input
          type="text"
          placeholder="Titulo da tarefa"
          className="py-2 px-4 rounded-md border border-slate-300 outline-slate-400"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Descricao da tarefa"
          className="py-2 px-4 rounded-md border border-slate-300 outline-slate-400"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea> */}
        <Input
          placeholder="Titulo da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          placeholder="Descricao da tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            //verificar se o titulo e descricao nao estao vazios
            if (!title.trim() || !description.trim()) {
              return alert(
                "Por favor, preencha o titulo e a descricao da tarefa."
              );
            }
            props.onTaskAddSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
          className="bg-slate-600 text-white py-2 rounded-md font-medium hover:bg-slate-700 transition"
        >
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
}

export default AddTask;
