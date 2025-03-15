const Sidebar = () => {
  return (
    <div className="fixed bg-[#1B1A1A] h-screen w-44 my-1 py-6 flex flex-col gap-5">
      <p className="mx-4 bg-[#3D3D3D] rounded-sm px-4 py-2">PHA</p>
      <p className="mx-4 rounded-sm px-4 py-2">Fund Analysis</p>
      <p className="mx-4 rounded-sm px-4 py-2">Holdings</p>
      <p className="mx-4 rounded-sm px-4 py-2">Transactions</p>
    </div>
  );
};

export default Sidebar;
