import { useState } from "react";
import Walletmodal from "./Walletmodal"; // Import the WalletModal component
import frame from "../assets/Frame 19 (1).png";
import fram from "../assets/Frame 20 (1).png";
import img from "../assets/image1.png";
import eli from "../assets/Frame 21.png";
import down from "../assets/download 5 (1).png";
import downs from "../assets/download 6 (1).png";

const Landingpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-2xl font-bold text-center">
          Revolutionizing Humanitarian Aid With Blockchain Transparency
        </h1>
        <div className="flex gap-3">
          <img src={frame} alt="Frame" className="w-[507px] h-[552px]" />
          <div>
            <img src={fram} alt="Fram" />
            <div className="flex justify-center mt-10">
              <button
                onClick={handleModalToggle}
                className="w-[300px] h-[50px] flex gap-3 justify-center items-center bg-black"
              >
                <p className="text-white text-[20px]">Connect Wallet</p>
                <img src={img} alt="Icon" className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Modal */}
      <Walletmodal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer */}
      <div className="flex justify-between p-4 mt-24 border border-black">
        <div className="flex gap-2 items-center">
          <img src={eli} alt="HelpNet" />
          <p className="text-2xl font-bold">HelpNet</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={down}
            alt="Starkner Blockchain"
            className="w-[40px] h-[40px]"
          />
          <p className="text-2xl font-bold">Starkner Blockchain</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={downs} alt="Cairo" className="w-[40px] h-[40px]" />
          <p className="text-2xl font-bold">Cairo</p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
