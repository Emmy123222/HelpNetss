import { useState } from "react";
import eli from "../../assets/Frame 21.png";
import clock from "../../assets/clock.png";
import contractABI from "../lib/abi"
import Modal from "./Modal"; // Import the Modal component
import { useAccount,  } from "@starknet-react/core";
// import { Contract, } from "starknet"
import '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// import Calendar from "react-calendar";
import { DateTimeRangePicker } from "@wojtekmaj/react-datetimerange-picker"
// import Connect from "../connect-modal";
// import { Data } from "framer/data/Data.js";
import WalletBar from "../starknet/WalletBar";
// const DECIMALS = 18;
const CreateCampaign1: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle the modal
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [initialAmount, setInitialAmount] = useState("");
  // const [targetAmount, setTargetAmount] = useState("");
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const [value, onChange] = useState(new Date());
  // const [date, setDate] = useState<Date | undefined>(new Date())
  // const WalletBar from '../components/WalletBar'
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const { account } = useAccount(); // User's connected wallet
  const [formData, setFormData] = useState({
    start_balance: '',
    name: '',
    target: '',
    deadline: '',
    description: '',
  });
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  // Initialize the contract instance
  // const contract = new Contract(contractABI.abi, contractABI.address);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!account) {
      alert('Please connect your wallet.');
      return;
    }

    const { start_balance, name, target, deadline, description } = formData;

    const datec = new Date(deadline); // Create a Date object
    const milliseconds = datec.getTime(); // Get the time in milliseconds
    const deadlineBigInt = BigInt(Math.floor(Number(milliseconds) / 1000)); // Convert timestamp to seconds and then to BigInt
    console.log(deadlineBigInt)
    try {
      const txHash = await account.execute({
        contractAddress: contractABI.address,
        entrypoint: 'create_campaign',
        calldata: [
          BigInt(start_balance), // Convert to BigInt
          name,
          BigInt(target),
          deadlineBigInt, // Convert deadline to seconds
          description,
        ],
      });
  
      setTransactionHash(txHash.transaction_hash); // Assuming `transaction_hash` is returned
      console.log('Transaction Hash:', txHash);
    } catch (error) {
      console.error('Error invoking create_campaign:', error);
    }
  };





  return (
    <div className="bg-white h-screen">
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
          <p className="text-black text-[20px] max-sm:text-[16px]">
            {/* <Connect/> */}
            <WalletBar/>
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Campaign Name"
              className="w-full bg-gray-200 h-12 px-4 text-black placeholder-gray-500 outline-none rounded-[20px] max-sm:h-10 max-sm:text-sm"
            />
          </div>

          <div className="space-y-3">
            <p className="max-sm:text-sm text-black">Campaign Description</p>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
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
                placeholder="Start Balance"
                name="start_balance"
                value={formData.start_balance}
                onChange={handleChange}
                className="w-[120px] text-black h-[52px] bg-[#F5F5F5] border rounded-[20px] border-black p-5 max-sm:w-full max-sm:h-10"
              />
            </div>
            <div>
              <p className="max-sm:text-sm text-black">Target balance</p>
              <input
                type="text"
                name="target"
                placeholder="Target Amount"
                value={formData.target}
                onChange={handleChange}
                className="w-[120px] h-[52px] text-black rounded-[20px] bg-[#F5F5F5] border border-black p-5 max-sm:w-full max-sm:h-10"
              />
            </div>
          </div>
          <div className="w-[180px] rounded-[20px] h-[52px] bg-[#F5F5F5] border border-black flex items-center justify-center max-sm:w-full max-sm:h-10"
            onClick={() => setIsCalenderOpen(isCalenderOpen)}
          >
            <img
              src={clock}
              alt="Clock Icon"
              className="w-[40px] max-sm:w-[30px]"
            />
            {/* <DateTimeRangePicker onChange={onChange} value={value} className={"bg-black"} /> */}
            <input type="date" name="deadline" id="date" className="w-5  text-black" onChange={handleChange} />
            {/* <Calendar onChange={onChange as any} value={value} /> */}
            <label htmlFor="date" className="rounded-full bg-slate-400 w-[100px] h-[40px] flex items-center justify-center max-sm:w-[80px] max-sm:h-[30px] max-sm:text-sm">
              Upcoming
            </label>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-6 max-sm:mt-4">
        <button
          className="w-[300px] text-white bg-black rounded-[10px] py-2 max-sm:w-full max-sm:text-sm"
          onClick={handleSubmit} // Open modal on click
        >
          Create Campaign
        </button>
      </div>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
      {/* Render the Modal */}
      {isCalenderOpen && <DateTimeRangePicker onChange={onChange as any} value={value} />}
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default CreateCampaign1;
