import { useState } from "react";
import eli from "../../assets/Frame 21.png";
import clock from "../../assets/clock.png";
import Modal from "./Modal"; // Import the Modal component

const CreateCampaign1: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle the modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="w-full h-[120px] bg-[#D9D9D9BA] flex justify-between items-center p-5  max-sm:h-auto max-sm:gap-4">
        <div className="flex gap-3 items-center justify-center">
          <img src={eli} alt="Logo" className="w-[50px] max-sm:w-[40px]" />{" "}
          <h1 className="font-medium text-[24px] text-black max-sm:text-[20px]">
            <strong>HelpNet</strong>
          </h1>
        </div>
        <div className="flex gap-4 max-sm:gap-2">
          <p className="text-black text-[20px] max-sm:text-[16px]">
            <strong>Features</strong>
          </p>
          <p className="text-black text-[20px] max-sm:text-[16px]">
            <strong>Menu</strong>
          </p>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex justify-center items-center flex-col mt-4">
          <h1 className="font-medium text-[24px] text-black max-sm:text-[20px]">
            <strong>Let others Know you!</strong>
          </h1>
        </div>
        <div className="container mx-auto space-y-12 max-sm:space-y-6 max-sm:p-4">
          <div className="space-y-3">
            <p className="max-sm:text-sm text-black">Campaign Name</p>
            <input
              type="text"
              placeholder="Campaign Name"
              className="w-full bg-gray-200 h-12 px-4 text-black placeholder-gray-500 outline-none rounded-[20px] max-sm:h-10 max-sm:text-sm"
            />
          </div>
          <div className="space-y-3">
            <p className="max-sm:text-sm text-black">Campaign Title</p>
            <input
              type="text"
              placeholder="Campaign Title"
              className="w-full bg-gray-200 h-12 px-4 text-black placeholder-gray-500 outline-none rounded-[20px] max-sm:h-10 max-sm:text-sm"
            />
          </div>
          <div className="space-y-3">
            <p className="max-sm:text-sm text-black">Campaign Description</p>
            <input
              type="text"
              placeholder="Campaign Description"
              className="w-full bg-gray-200 h-[100px] px-4 text-black placeholder-gray-500 outline-none rounded-[20px] max-sm:h-[80px] max-sm:text-sm"
            />
          </div>
        </div>

        <div className="flex container mx-auto gap-4 mt-8 justify-between max-sm:flex-col max-sm:gap-4 max-sm:p-5">
          <div className="flex gap-4 max-sm:flex-col max-sm:gap-2">
            <div>
              <p className="max-sm:text-sm text-black">Initial balance</p>
              <input
                type="text"
                className="w-[120px] text-black h-[52px] bg-[#F5F5F5] border rounded-[20px] border-black p-5 max-sm:w-full max-sm:h-10"
              />
            </div>
            <div>
              <p className="max-sm:text-sm text-black">Target balance</p>
              <input
                type="text"
                className="w-[120px] h-[52px] text-black rounded-[20px] bg-[#F5F5F5] border border-black p-5 max-sm:w-full max-sm:h-10"
              />
            </div>
          </div>
          <div className="w-[180px] rounded-[20px] h-[52px] bg-[#F5F5F5] border border-black flex items-center justify-center max-sm:w-full max-sm:h-10">
            <img
              src={clock}
              alt="Clock Icon"
              className="w-[40px] max-sm:w-[30px]"
            />
            <span className="rounded-full bg-slate-400 w-[100px] h-[40px] flex items-center justify-center max-sm:w-[80px] max-sm:h-[30px] max-sm:text-sm">
              Upcoming
            </span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-6 max-sm:mt-4">
        <button
          className="w-[300px] text-white bg-black rounded-[10px] py-2 max-sm:w-full max-sm:text-sm"
          onClick={handleOpenModal} // Open modal on click
        >
          Create Campaign
        </button>
      </div>

      {/* Render the Modal */}
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default CreateCampaign1;
