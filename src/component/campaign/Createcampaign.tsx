import { useState } from "react";
import eli from "../../assets/Frame 21.png";
import img from "../../assets/image2.png";
import imgs from "../../assets/image3.png";
import Explore from "./Explore";
import { useNavigate } from "react-router-dom";

const Createcampaign = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="bg-black p-5 flex justify-between items-center  max-sm:gap-4 max-sm:overflow-x-hidden">
        <div className="flex gap-3 items-center max-sm:justify-center">
          <img src={eli} alt="" className="w-[50px] max-sm:w-[40px]" />
          <h1 className="font-medium text-[24px] max-sm:text-[20px]">
            HelpNet
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="max-sm:hidden flex gap-4">
          <button
            className="bg-[#D9D9D98C] px-4 py-2 text-sm"
            onClick={() => navigate("/createcampaign1")}
          >
            Create Campaign
          </button>
          <button className="bg-[#D9D9D98C] px-4 py-2 text-sm">Join DAO</button>
          <button
            className="bg-[#D9D9D98C] px-4 py-2 text-sm"
            onClick={() => navigate("/creatordashboard")}
          >
            Creator Dashboard
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="hidden max-sm:flex">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none bg-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="max-sm:block bg-black w-full flex flex-col items-center gap-4 p-4  max-sm:space-y-3">
          <button
            className="bg-[#D9D9D98C] px-4 py-2 text-sm w-full"
            onClick={() => navigate("/createcampaign1")}
          >
            Create Campaign
          </button>
          <button className="bg-[#D9D9D98C] px-4 py-2 text-sm w-full">
            Join DAO
          </button>
          <button
            className="bg-[#D9D9D98C] px-4 py-2 text-sm w-full"
            onClick={() => navigate("/creatordashboard")}
          >
            Creator Dashboard
          </button>
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-4 max-sm:p-3 bg-white">
        <div className="flex gap-8 mt-5 max-sm:flex-col max-sm:gap-4 max-sm:items-center">
          <img src={img} alt="" className="w-[800px] max-sm:w-full" />
          <img src={imgs} alt="" className="w-[800px] max-sm:w-full" />
        </div>
        <div className="w-96 h-12 bg-gray-300 border border-gray-400 flex items-center rounded-[24px] p-4 max-sm:w-full">
          <input
            type="text"
            placeholder="Search HelpNet..."
            className="bg-transparent flex-grow outline-none text-gray-700 max-sm:text-sm"
          />
        </div>
      </div>

      {/* Explore Component */}
      <Explore />
      <div></div>
    </div>
  );
};

export default Createcampaign;
