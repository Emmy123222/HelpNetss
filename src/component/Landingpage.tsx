import { useState } from "react";
import Walletmodal from "./Walletmodal"; // Import the WalletModal component
import frame from "../assets/Frame 19 (1).png";

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
    <div className="min-h-screen flex flex-col justify-between bg-white relative overflow-hidden">
      {/* Spinning Image */}

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center space-y-8 mt-20 px-4 max-sm:space-y-6">
        <h1 className="text-2xl font-bold text-center max-sm:text-lg max-sm:leading-6 text-black">
          Revolutionizing Humanitarian Aid With Blockchain Transparency
        </h1>

        <div className="flex gap-6 items-center max-sm:flex-col max-sm:gap-4">
          <img
            src={frame}
            alt="Frame"
            className="h-auto max-sm:max-w-full max-sm:h-auto"
          />

          <div className="flex flex-col items-center max-sm:space-y-4 max-sm:w-full">
            <div className="w-[600px] h-[500px] border rounded-bl-[26px] border-black rounded-lg p-7 max-sm:w-full max-sm:h-auto max-sm:p-4 flex justify-center items-center">
              <p className="text-black text-[32px] max-sm:text-[16px] text-center">
                What if crowdfunding was fair, transparent, and truly
                community-driven? HelpNet runs on Starknet, governed by a DAO no
                gatekeepers, no hidden fees. Just real people
                backing real causes. 
              </p>
            </div>
            <div className="flex justify-center mt-4 max-sm:w-full">
              <button
                onClick={handleModalToggle}
                className="w-full max-w-xs h-[50px] flex gap-3 justify-center items-center bg-black rounded max-sm:py-2"
              >
                <p className="text-white text-lg max-sm:text-sm">
                  Connect Wallet
                </p>
                <img src={img} alt="Icon" className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Modal */}
      <Walletmodal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer */}
      <div className="flex bg-black justify-between items-center p-4 mt-16 border-t border-black max-sm:flex-col max-sm:space-y-4 ">
        <div className="flex gap-2 items-center">
          <img
            src={eli}
            alt="HelpNet"
            className="w-[30px] h-[30px] max-sm:w-[25px] max-sm:h-[25px]"
          />
          <p className="text-lg font-bold max-sm:text-sm text-white">HelpNet</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={down}
            alt="Starkner Blockchain"
            className="w-[30px] h-[30px] max-sm:w-[25px] max-sm:h-[25px]"
          />
          <p className="text-lg font-bold max-sm:text-sm text-white">
            Starkner Blockchain
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={downs}
            alt="Cairo"
            className="w-[30px] h-[30px] max-sm:w-[25px] max-sm:h-[25px]"
          />
          <p className="text-lg font-bold max-sm:text-sm text-white">Cairo</p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
