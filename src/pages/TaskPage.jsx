import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title"

function TaskPage() {
  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-800 p-6">
      <div className="w-[50wh] p-4 mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeft />
          </button>
          <Title>
            Detalhes da tarefa
          </Title>
        </div>
        <div className="bg-slate-900 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-400">{title}</h2>
          <p className=" text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
