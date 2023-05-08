import { Button } from "~/components/base";

// Change it to more generic component
const Header = () => {
  return (
    <header className="flex h-24 w-full items-center border-b border-slate-600 bg-white dark:bg-slate-700">
      <h2 className="flex-grow">Platform launch</h2>
      <Button />
      <p>...</p> {/* add menu button here */}
    </header>
  );
};

export default Header;
