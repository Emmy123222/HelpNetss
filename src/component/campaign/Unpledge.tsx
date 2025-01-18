import React, { useState } from "react";

interface PledgeProps {
  onClose: () => void;
}

const Unpledge: React.FC<PledgeProps> = ({ onClose }) => {
  const [unPledgeName, setUnPledgeName] = useState("");
  const [unPledgeAmount, setUnPledgeAmount] = useState("");

  const handlePledge = () => {
    alert(
      `Thank you for your pledge, ${unPledgeName}! Amount: $${unPledgeAmount}`
    );
    onClose(); // Close the modal after submission
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-white rounded-[26px] shadow-lg p-10 w-full max-w-[400px]"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <h1 className="text-xl font-semibold text-center mb-2">
          Support Our Cause
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your donation will provide and support other communities in need
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePledge();
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Upledge Name"
            value={unPledgeName}
            onChange={(e) => setUnPledgeName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-[26px] focus:outline-none focus:ring focus:ring-black text-black bg-white"
            required
          />
          <input
            type="number"
            placeholder="Unpledge Amount"
            value={unPledgeAmount}
            onChange={(e) => setUnPledgeAmount(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-[26px] focus:outline-none focus:ring focus:ring-black text-black bg-white"
            required
            min={1}
          />
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-[26px] hover:bg-gray-800 transition duration-200"
          >
            Unpledge
          </button>
        </form>
      </div>
    </div>
  );
};

export default Unpledge;
