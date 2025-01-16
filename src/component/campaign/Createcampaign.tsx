import eli from "../../assets/Frame 21.png";
import img from "../../assets/image2.png";
import imgs from "../../assets/image3.png";
import Explore from "./Explore";
import { useNavigate } from "react-router-dom";

const Createcampaign = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-pink-100 p-5 flex justify-between">
        <div className="flex gap-3 items-center">
          <img src={eli} alt="" className="w-[50px]" />
          <h1 className="font-medium text-[24px]">HelpNet</h1>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-[#D9D9D98C]"
            onClick={() => navigate("/createcampaign1")}
          >
            Create Campaign
          </button>
          <button className="bg-[#D9D9D98C]">Join DAO</button>
          <button className="bg-[#D9D9D98C]" onClick={() => navigate("/creatordashboard")}>Creator Dashboard</button>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex gap-8 mt-5">
          <img src={img} alt="" className="w-[800px]" />
          <img src={imgs} alt="" className="w-[800px]" />
        </div>
        <div className="w-96 h-12 bg-gray-300  border border-gray-400 flex items-center  rounded-[24px] p-4">
          <input
            type="text"
            placeholder="Search HelpNet..."
            className="bg-transparent flex-grow outline-none text-gray-700"
          />
        </div>
      </div>
      <Explore />
      <div></div>
    </div>
  );
};

export default Createcampaign;
