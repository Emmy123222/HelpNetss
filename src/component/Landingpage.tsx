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
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center space-y-8 px-4 max-sm:space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center max-sm:text-lg max-sm:leading-6 text-black">
          Revolutionizing Humanitarian Aid With Blockchain Transparency
        </h1>
        <div className="flex flex-col md:flex-row md:gap-3 items-center max-sm:gap-6">
          <img
            src={frame}
            alt="Frame"
            className="w-full max-w-sm h-auto md:w-[507px] md:h-[552px]"
          />
          <div className="flex flex-col items-center max-sm:space-y-4">
            <div className="w-[600px] h-[500px] border-b-8 border-black rounded-[26px] p-7">
              <p className="text-black text-[30px]">
                Imagine a world where every donation counts, and every dollar
                makes a tangible difference. A world where transparency and
                trust are the foundation of Humanitarian aid. welcome to
                HELPNET, a pioneering blockchain-based crowdfunding platform
                that’s changing the face of giving.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleModalToggle}
                className="w-full max-w-xs h-[50px] flex gap-3 justify-center items-center bg-black max-sm:py-3"
              >
                <p className="text-white text-lg md:text-[20px]">
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
      <div className="flex bg-black  flex-col md:flex-row justify-between items-center p-4 mt-16 border-t border-black max-sm:space-y-4 md:space-y-0">
        <div className="flex gap-2 items-center">
          <img
            src={eli}
            alt="HelpNet"
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
          />
          <p className="text-lg md:text-2xl font-bold max-sm:text-base text-white">
            HelpNet
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={down}
            alt="Starkner Blockchain"
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
          />
          <p className="text-lg md:text-2xl font-bold max-sm:text-base text-white">
            Starkner Blockchain
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={downs}
            alt="Cairo"
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
          />
          <p className="text-lg md:text-2xl font-bold max-sm:text-base text-white">
            Cairo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
