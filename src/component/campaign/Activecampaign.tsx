
import { useNavigate } from "react-router-dom";

const Activecampaign = () => {
  const navigate = useNavigate();
  const campaigns = [
    {
      title: "Green Planet, Clean Future",
      description: "Join our community to keep nature Green and Clean",
      amount: "$200,000",
      status: "Active",
      progress: "99% Of 100%",
      funding: "60% funded",
    },
    {
      title: "City Summer Fest",
      description:
        "Collaborate with local influencers to promote the festival through their platforms.",
      amount: "$30.00",
      status: "Upcoming",
      progress: "1k Supporters",
      funding: "60% raised",
    },
    {
      title: "City Summer Fest",
      description:
        "Collaborate with local influencers to promote the festival through their platforms.",
      amount: "$30.00",
      status: "Upcoming",
      progress: "1k Supporters",
      funding: "60% raised",
    },
  ];
  return (
    <div className="p-6 space-y-8 bg-[#9A92929C] min-h-screen">
      <div className="w-96 h-12 bg-gray-300 border border-gray-400 rounded-[24px] p-4 float-end items-center flex">
        <input
          type="text"
          placeholder="Search HelpNet..."
          className="bg-transparent flex-grow outline-none text-gray-700"
        />
      </div>
      <div className="mt-16">
        <h2 className="text-black text-[32px]">
          <strong>Active Campaigns</strong>
        </h2>
      </div>
      <div className="flex justify-between">
        <p className="text-black text-[20px]">Education</p>
        <p className="text-black text-[20px]">Earth</p>
        <p className="text-black text-[20px]">Community</p>
        <p className="text-black text-[20px]">Sports</p>
      </div>
      <div className="container mx-auto space-y-6">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-[24px] p-6 space-y-4 md:space-y-0 md:space-x-6"
          >
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold">{campaign.title}</h2>
              <p className="text-gray-700">{campaign.description}</p>
              <p className="text-lg font-bold">{campaign.amount}</p>
              <button
                className="bg-black text-white px-4 py-2 rounded-[24px] hover:bg-gray-800"
                onClick={() => navigate("/campaigninfo")}
              >
                View Progress
              </button>
            </div>

            {/* Vertical line */}
            <div className=" md:block w-px bg-gray-400 mx-4"></div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  campaign.status === "Active"
                    ? "bg-black text-white"
                    : "bg-black text-white"
                }`}
              >
                {campaign.status}
              </span>
              <p className="mt-2 text-sm text-gray-700">{campaign.progress}</p>
              <p className="text-sm text-gray-700">{campaign.funding}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activecampaign;
