import { type LocalColumn } from "~/mocks/board1";
import Task from "./Task";

type ColumnProps = {
  column?: LocalColumn;
};

const Column = ({ column }: ColumnProps) => {
  const handleColumnAdd = () => {
    // open modal or smth
    console.info("add new column");
  };
  return (
    <div className="flex w-full min-w-[10rem] max-w-xs flex-col gap-5">
      {column ? (
        <>
          <h3 className="text-slate-500">
            <div
              className="mr-2 inline-block h-4 w-4 rounded-lg"
              style={{
                backgroundColor: column.color,
              }}
            ></div>
            {column.name}
            <span>({column.tasks.length})</span>
          </h3>
          <ul className="flex flex-col gap-4">
            {column.tasks.map((task) => (
              <li key={task.order}>
                <Task task={task} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div
          className="mt-10 flex h-full cursor-pointer items-center justify-center rounded-lg bg-slate-700/40"
          onClick={handleColumnAdd}
        >
          <h3 className="text-center text-2xl text-primary-light/70">
            + New column
          </h3>
        </div>
      )}
    </div>
  );
};

export default Column;
