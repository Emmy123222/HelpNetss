import React, { useState } from "react";
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
    <div className="">
      <div className="w-full h-[120px] bg-[#D9D9D9BA] flex justify-between items-center p-5">
        <div className="flex gap-3 items-center justify-center">
          <img src={eli} alt="Logo" className="w-[50px]" />{" "}
          <h1 className="font-medium text-[24px] text-black">
            <strong>HelpNet</strong>
          </h1>
        </div>
        <div className="flex gap-4">
          <p className="text-black text-[20px]">
            <strong>Features</strong>
          </p>
          <p className="text-black text-[20px]">
            <strong>Menu</strong>
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col mt-4">
          <h1 className="font-medium text-[24px] text-black">
            <strong>Let others Know you!</strong>
          </h1>
        </div>
        <div className="container mx-auto space-y-12">
          <div className="space-y-3">
            <p>Campaign Name</p>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full bg-gray-200 h-12 px-4 text-black placeholder-gray-500 outline-none rounded-[20px]"
            />
          </div>
          <div className="space-y-3">
            <p>Campaign Title</p>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full bg-gray-200 h-12 px-4 text-black placeholder-gray-500 outline-none rounded-[20px]"
            />
          </div>
          <div className="space-y-3">
            <p>Campaign Description</p>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full bg-gray-200 h-[100px] px-4 text-black placeholder-gray-500 outline-none rounded-[20px]"
            />
          </div>
        </div>
        <div className="flex container mx-auto gap-4 mt-8 justify-between">
          <div className="flex gap-4">
            <div>
              <p>Initial balance</p>
              <input
                type="text"
                className="w-[120px] h-[52px] bg-[#F5F5F5] border rounded-[20px] border-black p-5"
              />
            </div>
            <div>
              <p>Target balance</p>
              <input
                type="text"
                className="w-[120px] h-[52px] rounded-[20px] bg-[#F5F5F5] border border-black p-5"
              />
            </div>
          </div>
          <div className="w-[180px] rounded-[20px] h-[52px] bg-[#F5F5F5] border border-black flex items-center justify-center">
            <img src={clock} alt="Clock Icon" className="w-[40px]" />
            <span className="rounded-full bg-slate-400 w-[100px] h-[40px] flex items-center justify-center">
              Upcoming
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="w-[300px] text-white bg-black rounded-[10px] py-2"
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
