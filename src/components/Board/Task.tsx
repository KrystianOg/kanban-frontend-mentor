import { type LocalTask } from "~/mocks/board1";

type TaskProps = {
  task: LocalTask;
};

const Task = ({ task }: TaskProps) => {
  return (
    <div className="rounded-xl bg-slate-700 p-3">
      <p className="font-bold text-white">{task.title}</p>
      <p className="font-bold text-slate-500"> 0 of X subtasks</p>
    </div>
  );
};

export default Task;
