import { type PropsWithChildren } from "react";

type TextProps = {
  fontWeight?: "bold" | "normal";
  fontSize: number;
  lineHeight: number;
  kerning?: number;
} & PropsWithChildren;

const Text = ({
  fontWeight = "bold",
  fontSize,
  lineHeight,
  kerning,
  children,
}: TextProps) => (
  <div>
    <div className="mb-1 flex gap-4">
      <p className="text-slate-500">Plukas Jakarta Sans</p>
      <p className="text-slate-900 dark:text-slate-200">{fontWeight}</p>
      <p className="text-slate-500">{fontSize}px</p>
      <p className="text-slate-500">{lineHeight}px Line</p>
      {kerning !== undefined && (
        <p className="text-slate-500">{kerning}px Kerning</p>
      )}
    </div>
    <div className="dark:text-white">{children}</div>
  </div>
);

export default Text;
