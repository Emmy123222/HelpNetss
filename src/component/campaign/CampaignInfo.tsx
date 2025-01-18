import { useState } from "react";
import Pledge from "../campaign/Plegde";
import Unpledge from "./Unpledge"; // Import the Pledge component

const CampaignInfo = () => {
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false); // State to toggle Pledge modal

  const handleOpenPledgeModal = () => {
    setIsPledgeModalOpen(true);
  };

  const handleClosePledgeModal = () => {
    setIsPledgeModalOpen(false);
  };
  const [isUnPledgeModalOpen, setIsUnPledgeModalOpen] = useState(false); // State to toggle unPledge modal

  const handleOpenUnPledgeModal = () => {
    setIsUnPledgeModalOpen(true);
  };

  const handleCloseUnPledgeModal = () => {
    setIsUnPledgeModalOpen(false);
  };
  return (
    <div className="container mx-auto min-h-screen p-5 w-[900px] max-sm:w-full max-sm:flex max-sm:flex-col bg-white">
      <div className="flex flex-col justify-center items-center mt-10 max-sm:mt-5">
        <h1 className="font-medium text-[24px] text-black max-sm:text-[18px]">
          <strong>Campaign Info</strong>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center max-sm:mx-auto  max-sm:w-full">
        <div className="p-5 max-sm:p-2 space-y-3">
          <h1 className="text-black text-[20px] max-sm:text-[16px]">
            <strong>Creator Name</strong>
          </h1>
          <input
            type="text"
            placeholder="Name..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300 max-sm:w-[300px] max-sm:h-[60px] max-sm:p-3 bg-white"
          />
        </div>
        <div className="p-5 max-sm:p-2 space-y-3">
          <h1 className="text-black text-[20px] max-sm:text-[16px]">
            <strong>Current Balance</strong>
          </h1>
          <input
            type="text"
            placeholder="Price..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300 max-sm:w-[300px] max-sm:h-[60px] max-sm:p-3 bg-white"
          />
        </div>
        <div className="p-5 max-sm:p-2 space-y-3">
          <h1 className="text-black text-[20px] max-sm:text-[16px]">
            <strong>Target</strong>
          </h1>
          <input
            type="text"
            placeholder="Price..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300 max-sm:w-[300px] max-sm:h-[60px] max-sm:p-3 bg-white"
          />
        </div>
        <div className="p-5 max-sm:p-2 space-y-3">
          <h1 className="text-black text-[24px] max-sm:text-[16px]">
            <strong>Deadline</strong>
          </h1>
          <input
            type="text"
            placeholder="Data..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300 max-sm:w-[300px] max-sm:h-[60px] max-sm:p-3 bg-white"
          />
        </div>
        <div className="max-sm:mt-4 space-y-3">
          <h1 className="text-black text-[24px] max-sm:text-[16px]">
            <strong>Description</strong>
          </h1>
          <div className="p-5 w-[900px] h-[150px] rounded-[26px] border border-gray-300 max-sm:w-full max-sm:h-fit max-sm:p-3">
            <p className="max-sm:text-sm text-black">
              Join us in our mission to provide art supplies to underprivileged
              schools across the country. With your support, we aim to raise
              $10,000 to purchase and distribute high-quality art materials to
              classrooms in need. Every donation, big or small, will help foster
              creativity and self-expression in children who otherwise wouldn't
              have access to these resources. Your contribution will make a
              lasting impact on their educational journey. Thank you for helping
              us make a difference!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8  max-sm:flex-col max-sm:gap-4 ">
        <div
          className="w-[200px] rounded-[24px] h-[60px] bg-black flex justify-center items-center cursor-pointer max-sm:w-full"
          onClick={handleOpenPledgeModal} // Open Pledge modal
        >
          <h1 className="text-white text-[18px] max-sm:text-[16px]">
            <strong>Pledge</strong>
          </h1>
        </div>
        <div
          className="w-[200px] h-[60px] bg-black rounded-[24px] flex justify-center items-center cursor-pointer max-sm:w-full"
          onClick={handleOpenUnPledgeModal}
        >
          <h1 className="text-white text-[18px] max-sm:text-[16px]">
            <strong>Unpledge</strong>
          </h1>
        </div>
      </div>

      {/* Render the Pledge Modal */}
      {isPledgeModalOpen && <Pledge onClose={handleClosePledgeModal} />}
      {isUnPledgeModalOpen && <Unpledge onClose={handleCloseUnPledgeModal} />}
    </div>
  );
};

export default CampaignInfo;
