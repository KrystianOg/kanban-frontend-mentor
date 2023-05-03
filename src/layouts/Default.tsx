import { type PropsWithChildren } from "react";
import { Navbar, Header } from "~/components";

const Default = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Header />
      {children}
    </div>
  );
};

export default Default;
