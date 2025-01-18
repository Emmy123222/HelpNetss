import meta from "../assets/metamask-logo.jpg";
import braz from "../assets/download 4 (1).png";
import agent from "../assets/download 3 (1).png";
import arrow from "../assets/image2arrow.png";
import { useNavigate } from "react-router-dom";

const Walletmodal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose} // Close modal when clicking on the background
    >
      <div
        className="bg-white p-6 w-[435px] max-w-full shadow-lg rounded-[26px] space-y-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-xl font-bold text-center text-black">
          Wallet Connect
        </h2>
        <p className="text-center text-sm text-gray-600 mt-2">
          By connecting wallet you accept our{" "}
          <span className="text-red-500">terms</span> and{" "}
          <span className="text-red-500">privacy policy</span>.
        </p>
        <div className="space-y-4 mt-4">
          <div
            className="flex justify-between items-center p-3 border border-gray-300 bg-gray-100 rounded-[20px] w-full h-[64px] cursor-pointer max-sm:w-full"
            onClick={() => navigate("/createcampaign")}
          >
            <div className="flex items-center gap-3">
              <img src={meta} alt="" className="w-8 h-8" />
              <p className="font-medium text-black">MetaMask</p>
            </div>
            <span>
              <img src={arrow} alt="" />
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-100 border border-gray-300 rounded-[20px] w-full h-[64px] cursor-pointer max-sm:w-full">
            <div className="flex items-center gap-3">
              <img src={agent} alt="Agent X" className="w-8 h-8" />
              <p className="font-medium text-black">Agent X</p>
            </div>
            <span>
              <img src={arrow} alt="" />
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-100 border border-gray-300 rounded-[20px] w-full h-[64px] cursor-pointer max-sm:w-full ">
            <div className="flex items-center gap-3">
              <img
                src={braz}
                alt="Braavos"
                className="w-8 h-8 rounded-[26px]"
              />
              <p className="font-medium text-black">Braavos</p>
            </div>
            <span>
              <img src={arrow} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walletmodal;
