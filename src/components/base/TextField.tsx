import { type InputHTMLAttributes } from "react";
import classNames from "classnames";

type TextFieldProps = {
  name?: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
  labelClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  valid,
  errorMessage,
  label,
  className,
  labelClassName,
  ...props
}: TextFieldProps) => {
  return (
    <div className="flex flex-col">
      <label
        className={classNames(
          "relative font-bold text-slate-900 dark:text-slate-50",
          {
            [labelClassName as string]: !!labelClassName,
          }
        )}
      >
        {label}
        <input
          className={classNames(
            "peer h-10 w-full rounded-md border bg-transparent pl-4 outline-none dark:text-white",
            {
              // true for valid = undefined & valid = true
              "border-slate-500/25 focus:border-primary-light": valid ?? true,
              // true for valid = false
              "border-destructive ": valid === false,
              [className as string]: className,
            }
          )}
          {...props}
        />
        {valid === false && !!errorMessage && (
          <span className="align-center py-auto absolute right-0 mr-2 mt-2 bg-slate-700 pl-2 text-destructive peer-invalid:visible">
            {errorMessage}
          </span>
        )}
      </label>
    </div>
  );
};

export default TextField;
