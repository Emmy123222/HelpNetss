const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black ">
      <div className=" sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h1 className="font-medium text-[24px]">HelpNet</h1>
          </div>

          <div className=" space-x-8 flex">
            <div className="text-black  px-3 py-2 rounded-md text-sm font-medium text-[28px]">
              About Us
            </div>
            <div className="text-black  px-3 py-2 rounded-md text-sm font-medium text-[28px]">
              Teams
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
