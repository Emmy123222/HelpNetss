
import { useNavigate } from "react-router-dom";

const CampaignInfo = () => {
  const navigate = useNavigate();

  const handlePledgeClick = () => {
    navigate("/pledge"); // Navigate to the PledgePage
  };
  const handleUnpledgeClick = () => {
    navigate("/unpledge");
  };
  return (
    <div className="container mx-auto min-h-screen p-5 w-[900px]">
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="font-medium text-[24px] text-black">
          <strong>Campaign Info</strong>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-5">
          <h1 className="text-black text-[20px]">
            <strong>Creator Name</strong>
          </h1>
          <input
            type="text"
            placeholder="Name..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300"
          />
        </div>
        <div className="p-5">
          <h1 className="text-black text-[20px]">
            <strong>Current Balance</strong>
          </h1>
          <input
            type="text"
            placeholder="Price..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300"
          />
        </div>
        <div className="p-5">
          <h1 className="text-black text-[20px]">
            <strong>Target</strong>
          </h1>
          <input
            type="text"
            placeholder="Price..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300"
          />
        </div>
        <div className="p-5">
          <h1 className="text-black text-[24px]">
            <strong>Deadline</strong>
          </h1>
          <input
            type="text"
            placeholder="Data..."
            className="w-[900px] h-[80px] p-5 rounded-[26px] border border-gray-300"
          />
        </div>
        <div>
          <h1 className="text-black text-[24px]">
            <strong>Description</strong>
          </h1>
          <div className="p-5 w-[900px] h-[150px]  rounded-[26px] border border-gray-300">
            <p>
              join us in our mission to provide art supplies to underprivileged
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
      <div className="flex justify-between mt-8 ">
        <div
          className="w-[200px] rounded-[24px] h-[60px] bg-black flex justify-center items-center cursor-pointer"
          onClick={handlePledgeClick}
        >
          {" "}
          <h1 className="text-white text-[18px]">
            <strong>Pledge</strong>
          </h1>
        </div>
        <div
          className="w-[200px] h-[60px] bg-black rounded-[24px] flex justify-center items-center cursor-pointer"
          onClick={handleUnpledgeClick}
        >
          {" "}
          <h1 className="text-white text-[18px]">
            <strong>Unpledge</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CampaignInfo;
