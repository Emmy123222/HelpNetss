import { useState } from "react";
import eli from "../../assets/Frame 21.png";
import icon from "../../assets/icon3.png";

interface Campaign {
  id: number;
  name: string;
  initialAmount: string; // Amount available for withdrawal
  targetAmount: string;
  description: string;
}

const Creatordashboard: React.FC = () => {
  const [campaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: "Campaign 1",
      initialAmount: "$500.00",
      targetAmount: "$1,000.00",
      description: "Description for Campaign 1",
    },
    {
      id: 2,
      name: "Campaign 2",
      initialAmount: "$1,000.00",
      targetAmount: "$2,500.00",
      description: "Description for Campaign 2",
    },
    {
      id: 3,
      name: "Campaign 3",
      initialAmount: "$300.00",
      targetAmount: "$800.00",
      description: "Description for Campaign 3",
    },
    {
      id: 4,
      name: "Campaign 4",
      initialAmount: "$800.00",
      targetAmount: "$3000.00",
      description: "Description for Campaign 4",
    },
    {
      id: 5,
      name: "Campaign 5",
      initialAmount: "$100.00",
      targetAmount: "$6000.00",
      description: "Description for Campaign 5",
    },
  ]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isTotalModalVisible, setTotalModalVisible] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");

  // Calculate the total of all initial amounts
  const totalAmount = campaigns.reduce((sum, campaign) => {
    const amount = parseFloat(
      campaign.initialAmount.replace("$", "").replace(",", "")
    );
    return sum + amount;
  }, 0);

  // Open modal for a specific campaign
  const handleOpenModal = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setWithdrawAmount(""); // Clear input field
    setWalletAddress(""); // Clear wallet field
    setModalVisible(true);
  };

  // Close campaign modal
  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedCampaign(null);
    setWithdrawAmount("");
    setWalletAddress("");
  };

  // Open total earnings modal
  const handleOpenTotalModal = () => {
    setWithdrawAmount(""); // Clear input field
    setWalletAddress(""); // Clear wallet field
    setTotalModalVisible(true);
  };

  // Close total earnings modal
  const handleCloseTotalModal = () => {
    setTotalModalVisible(false);
    setWithdrawAmount("");
    setWalletAddress("");
  };

  // Handle Withdraw Action
  const handleWithdraw = () => {
    if (selectedCampaign) {
      const maxAmount = parseFloat(
        selectedCampaign.initialAmount.replace("$", "").replace(",", "")
      );
      const inputAmount = parseFloat(withdrawAmount);

      if (!walletAddress.trim()) {
        alert("Please enter a valid wallet address.");
      } else if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Please enter a valid amount.");
      } else if (inputAmount > maxAmount) {
        alert(`You can only withdraw up to ${selectedCampaign.initialAmount}.`);
      } else {
        alert(
          `You have successfully withdrawn $${inputAmount.toFixed(2)} from ${
            selectedCampaign.name
          }. Wallet: ${walletAddress}`
        );
        handleCloseModal();
      }
    }
  };

  // Handle Total Withdraw Action
  const handleWithdrawTotal = () => {
    const inputAmount = parseFloat(withdrawAmount);

    if (!walletAddress.trim()) {
      alert("Please enter a valid wallet address.");
    } else if (isNaN(inputAmount) || inputAmount <= 0) {
      alert("Please enter a valid amount.");
    } else if (inputAmount > totalAmount) {
      alert(`You can only withdraw up to $${totalAmount.toFixed(2)}.`);
    } else {
      alert(
        `You have successfully withdrawn $${inputAmount.toFixed(
          2
        )}. Wallet: ${walletAddress}`
      );
      handleCloseTotalModal();
    }
  };

  return (
    <div>
      <div className="bg-[#D9D9D9BA] p-5 flex justify-between">
        <div className="flex gap-3 items-center">
          <img src={eli} alt="" className="w-[50px]" />
          <h1 className="font-medium text-[24px]">HelpNet</h1>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search HelpNet..."
            className="bg-white flex-grow outline-none text-gray-700 rounded-[26px] p-4"
          />
          <img src={icon} alt="" className="w-[50px] h-[50px]" />
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 p-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-5">Campaign Management Board</h1>

        <div className="w-full max-w-4xl overflow-x-auto">
          <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
          <table className="min-w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-semibold">Campaign Name</th>
                <th className="p-3 text-left font-semibold">Initial Amount</th>
                <th className="p-3 text-left font-semibold">Target Amount</th>
                <th className="p-3 text-left font-semibold">
                  Campaign Description
                </th>
                <th className="p-3 text-left font-semibold">Withdraw</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{campaign.name}</td>
                  <td className="p-3">{campaign.initialAmount}</td>
                  <td className="p-3">{campaign.targetAmount}</td>
                  <td className="p-3">{campaign.description}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleOpenModal(campaign)}
                      className="px-4 py-2 bg-green-500 text-white  hover:bg-green-600 transition rounded-[26px]"
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Withdrawable Amount Section */}
        <div className="mt-10 bg-gray-100 p-5 rounded-lg w-full max-w-lg text-center shadow-md">
          <h2 className="text-xl font-bold">Total Amount</h2>
          <p className="text-3xl font-semibold text-gray-800">
            ${totalAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
          <button
            onClick={handleOpenTotalModal}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Withdraw Earnings
          </button>
        </div>

        {isModalVisible && selectedCampaign && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-[26px] w-96">
              <h2 className="text-xl font-bold mb-4">
                Withdraw from {selectedCampaign.name}
              </h2>
              <p className="mb-4">
                Maximum Withdrawable Amount:{" "}
                <strong>{selectedCampaign.initialAmount}</strong>
              </p>
              <label className="block mb-2 font-semibold">Wallet Address</label>
              <input
                type="text"
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2 font-semibold">Enter Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <button
                onClick={handleWithdraw}
                className="w-full bg-black text-white py-2 rounded "
              >
                Withdraw
              </button>
              <button
                onClick={handleCloseModal}
                className="w-full bg-gray-300 text-black py-2 rounded mt-3 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {isTotalModalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-[26px] w-96">
              <h2 className="text-xl font-bold mb-4">
                Withdraw Total Earnings
              </h2>
              <p className="mb-4">
                Maximum Withdrawable Amount:{" "}
                <strong>
                  $
                  {totalAmount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </p>
              <label className="block mb-2 font-semibold">Wallet Address</label>
              <input
                type="text"
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2 font-semibold">Enter Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <button
                onClick={handleWithdrawTotal}
                className="w-full bg-black text-white py-2 rounded "
              >
                Withdraw
              </button>
              <button
                onClick={handleCloseTotalModal}
                className="w-full bg-gray-300 text-black py-2 rounded mt-3 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Creatordashboard;
