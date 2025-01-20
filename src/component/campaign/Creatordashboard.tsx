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
    <div className="bg-white h-screen">
      <div className="bg-[#D9D9D9BA] p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-3 items-center">
          <img src={eli} alt="" className="w-[40px] sm:w-[50px]" />
          <h1 className="font-medium text-lg sm:text-2xl">HelpNet</h1>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search HelpNet..."
            className="bg-white flex-grow outline-none text-gray-700 rounded-[26px] p-3 sm:p-4 w-full"
          />
          <img
            src={icon}
            alt=""
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
          />
        </div>
      </div>

      <div className=" bg-gray-50 p-5 flex flex-col items-center max-sm:mt-24 mx-auto ">
        <h1 className="text-lg sm:text-2xl font-bold mb-5 text-center text-black">
          Campaign Management Board
        </h1>

        <div className="w-full mx-UT overflow-x-auto">
          <table className="w-full min-w-[600px] sm:min-w-[800px] bg-white shadow-lg rounded-lg border-collapse ">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-black">
                  Campaign Name
                </th>
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-black">
                  Initial Amount
                </th>
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-black">
                  Target Amount
                </th>
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-black">
                  Description
                </th>
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-black">
                  Withdraw
                </th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-2 sm:p-3 text-xs sm:text-sm text-black">
                    {campaign.name}
                  </td>
                  <td className="p-2 sm:p-3 text-xs sm:text-sm text-black">
                    {campaign.initialAmount}
                  </td>
                  <td className="p-2 sm:p-3 text-xs sm:text-sm text-black">
                    {campaign.targetAmount}
                  </td>
                  <td className="p-2 sm:p-3 text-xs sm:text-sm text-black">
                    {campaign.description}
                  </td>
                  <td className="p-2 sm:p-3">
                    <button
                      onClick={() => handleOpenModal(campaign)}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-green-500 text-white hover:bg-green-600 transition rounded-[26px] text-xs sm:text-sm w-full"
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 bg-gray-100 p-4 sm:p-5 rounded-lg w-full max-w-md text-center shadow-md">
          <h2 className="text-lg sm:text-xl font-bold text-black">
            Total Amount
          </h2>
          <p className="text-xl sm:text-3xl font-semibold text-black">
            ${totalAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
          <button
            onClick={handleOpenTotalModal}
            className="mt-4 px-5 sm:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Withdraw Earnings
          </button>
        </div>

        {isModalVisible && selectedCampaign && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-4 sm:p-6 rounded-[26px] w-[90%] sm:w-96">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-black">
                Withdraw from {selectedCampaign.name}
              </h2>
              <p className="mb-4 text-sm sm:text-base text-black">
                Maximum Withdrawable Amount:{" "}
                <strong>{selectedCampaign.initialAmount}</strong>
              </p>
              <label className="block mb-2 font-semibold text-sm sm:text-base text-black">
                Wallet Address
              </label>
              <input
                type="text"
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full p-2 border  mb-4 text-sm sm:text-base bg-gray-300 rounded-[26px] text-black"
              />
              <label className="block mb-2 font-semibold text-sm sm:text-base text-black">
                Enter Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full p-2 border mb-4 text-sm sm:text-base bg-gray-300 rounded-[26px] text-black"
              />
              <button
                onClick={handleWithdraw}
                className="w-full bg-black text-white py-2 rounded-[26px] text-sm sm:text-base"
              >
                Withdraw
              </button>
              <button
                onClick={handleCloseModal}
                className="w-full bg-gray-300 text-black py-2 rounded-[26px] mt-3 hover:bg-gray-400 text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {isTotalModalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-4 sm:p-6  w-[90%] sm:w-96 rounded-[26px]">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-black">
                Withdraw Total Earnings
              </h2>
              <p className="mb-4 text-sm sm:text-base text-black">
                Maximum Withdrawable Amount:{" "}
                <strong>
                  $
                  {totalAmount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </p>
              <label className="block mb-2 font-semibold text-sm sm:text-base text-black">
                Wallet Address
              </label>
              <input
                type="text"
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full p-2 border bg-gray-300 mb-4 text-sm sm:text-base text-black rounded-[26px]"
              />
              <label className="block mb-2 font-semibold text-sm sm:text-base text-black">
                Enter Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full p-2 border bg-gray-300 mb-4 text-sm sm:text-base text-black rounded-[26px]"
              />
              <button
                onClick={handleWithdrawTotal}
                className="w-full bg-black text-white py-2  text-sm sm:text-base rounded-[26px]"
              >
                Withdraw
              </button>
              <button
                onClick={handleCloseTotalModal}
                className="w-full bg-gray-300 text-black py-2  mt-3 hover:bg-gray-400 text-sm sm:text-base rounded-[26px]"
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
