import { type PropsWithChildren } from "react";
import { Navbar, Header } from "~/components";

const Default = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="flex w-full flex-col">
        <Header />
        <div className="h-full w-full bg-slate-200 dark:bg-slate-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Default;
