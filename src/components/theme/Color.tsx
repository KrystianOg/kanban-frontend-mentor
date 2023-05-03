import classNames from "classnames";

type Props = {
  hex: string;
  rgb: [number, number, number];
  hsl: [number, number, number];
  darkText?: boolean;
};

const Color = ({ hex, rgb, hsl, darkText = false }: Props) => {
  return (
    <div className="w-1/2 px-1 sm:w-1/3 sm:px-2 lg:w-1/4 lg:px-3">
      <div
        className="max-w-48 relative mb-2 h-20 w-full rounded-md"
        style={{
          backgroundColor: `${hex}`,
        }}
      >
        <p
          className={classNames("absolute bottom-4 left-4 font-bold", {
            "text-white": !darkText,
            "text-slate-700": darkText,
          })}
        >
          {hex}
        </p>
      </div>
      <div className="flex">
        <p className="w-1/4 text-slate-500">RGB</p>
        <p className="w-3/4 text-slate-900 dark:text-slate-100">
          {rgb[0]}, {rgb[1]}, {rgb[2]}
        </p>
      </div>
      <div className="flex">
        <p className="w-1/4 text-slate-500">HSL</p>
        <p className="w-3/4 text-slate-900 dark:text-slate-100">
          {hsl[0]}°, {hsl[1]}%, {hsl[2]}%
        </p>
      </div>
    </div>
  );
};

export default Color;
