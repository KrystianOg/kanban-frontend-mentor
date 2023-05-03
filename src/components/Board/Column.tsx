import { type LocalColumn } from "~/mocks/board1";
import Task from "./Task";

type ColumnProps = {
  column: LocalColumn;
};

const Column = ({ column }: ColumnProps) => {
  return (
    <div className="min-w-32 flex w-full max-w-xs flex-col gap-5">
      <h3 className="text-slate-500">
        <div className="mr-2 inline-block h-4 w-4 rounded-lg bg-green-600"></div>
        {column.name}
        <span>({column.tasks.length})</span>
      </h3>
      <ul className="flex flex-col gap-4">
        {column.tasks.map((task) => (
          <li key={task.order as number}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
