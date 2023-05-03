import { Button } from "~/components/base";

const Header = () => {
  return (
    <header className="flex h-24 w-full flex-grow">
      <h2>Platform launch</h2>
      <Button />
      <p>...</p> {/* add menu here */}
    </header>
  );
};

export default Header;
