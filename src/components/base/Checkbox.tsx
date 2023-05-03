import { type InputHTMLAttributes, type MouseEvent } from "react";
import classNames from "classnames";

type CheckboxProps = {
  text: string;
  full?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  text,
  full = false,
  onClick,
  checked,
  defaultChecked,
  ...props
}: CheckboxProps) => {
  const handleClick =
    (active = false) =>
    (e: MouseEvent<HTMLInputElement>) =>
      active && onClick?.(e);

  return (
    <div
      className="flex h-10 items-center rounded-md bg-slate-100 hover:bg-primary/25 dark:bg-slate-800 dark:hover:bg-primary/25"
      onClick={handleClick(full)}
    >
      <input
        type="checkbox"
        onClick={handleClick(!full)}
        checked={checked}
        defaultChecked={defaultChecked}
        {...props}
        className="ml-3 h-4 w-4 cursor-pointer rounded-sm text-primary focus:ring-2 focus:ring-primary-light dark:bg-slate-700 dark:ring-offset-gray-800 dark:focus:ring-primary-light"
      />
      <span
        className={classNames("ml-3 cursor-default font-bold ", {
          "text-slate-900 dark:text-slate-200": defaultChecked ?? !checked,
          "text-slate-500 line-through dark:text-slate-500":
            defaultChecked ?? checked,
        })}
      >
        {text}
      </span>
    </div>
  );
};

export default Checkbox;
