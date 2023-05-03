const Navbar = () => {
  const boards = [
    {
      id: 1,
      name: "Platform launch",
      color: "red",
    },
    {
      id: 2,
      name: "Marketing plan",
      color: "blue",
    },
    {
      id: 3,
      name: "Product roadmap",
    },
  ];
  return (
    <aside className="flex h-screen w-72 flex-col">
      <div className="flex">
        Logo
        <h1>kanban</h1>
      </div>
      <h3 className="uppercase">all boards</h3>
      <ul className="flex-grow">
        {boards.map((board) => (
          <li key={board.id}>
            <p>
              <span>icon</span>
              {board.name}
              {board?.color && <span>{board?.color}</span>}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <span>sun</span>
        <button>toggle</button>
        <span>moon</span>
      </div>
      <button>Hide sidebar</button>
    </aside>
  );
};

export default Navbar;
