import { useEffect, useState } from "react";
import Walletmodal from "./Walletmodal"; // Import the WalletModal component
import frame from "../assets/Frame 19 (1).png";

// import img from "../assets/image1.png";
import eli from "../assets/Frame 21.png";
import down from "../assets/download 5 (1).png";
import downs from "../assets/download 6 (1).png";
import Connect from "./connect-modal";
import { useAccount } from "@starknet-react/core";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate("/createcampaign");
    }
  }, [location.pathname, isConnected]);

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
            <div className="w-[600px] h-[500px] border rounded-bl-[26px] border-black rounded-lg p-7 max-sm:w-full max-sm:h-auto max-sm:p-4">
              <p className="text-black text-[30px] max-sm:text-[16px]">
                Imagine a world where every donation counts, and every dollar
                makes a tangible difference. A world where transparency and
                trust are the foundation of Humanitarian aid. Welcome to
                HELPNET, a pioneering blockchain-based crowdfunding platform
                that's changing the face of giving.
              </p>
            </div>
            <div className="flex justify-center mt-4 max-sm:w-full">
              <Connect />
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
