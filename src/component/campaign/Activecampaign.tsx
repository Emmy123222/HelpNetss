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
    <div className="p-6 space-y-8 bg-[#9A92929C] min-h-screen max-sm:space-y-4">
      {/* Search bar */}
      <div className="w-96 h-12 bg-gray-300 border border-gray-400 rounded-[24px] p-4 flex items-center max-sm:w-full max-sm:h-10">
        <input
          type="text"
          placeholder="Search HelpNet..."
          className="bg-transparent flex-grow outline-none text-gray-700 max-sm:text-sm"
        />
      </div>

      {/* Header */}
      <div className="mt-16 max-sm:mt-4">
        <h2 className="text-black text-[32px] max-sm:text-[24px]">
          <strong>Active Campaigns</strong>
        </h2>
      </div>

      {/* Categories */}
      <div className="flex justify-between max-sm:flex-wrap max-sm:gap-2">
        <p className="text-black text-[20px] max-sm:text-sm">Education</p>
        <p className="text-black text-[20px] max-sm:text-sm">Earth</p>
        <p className="text-black text-[20px] max-sm:text-sm">Community</p>
        <p className="text-black text-[20px] max-sm:text-sm">Sports</p>
      </div>

      {/* Campaign Cards */}
      <div className="container mx-auto space-y-6 max-sm:space-y-4">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-[24px] p-6 max-sm:space-y-4"
          >
            {/* Campaign Info */}
            <div className="flex-1 max-sm:space-y-2">
              <h2 className="text-xl font-semibold max-sm:text-lg">
                {campaign.title}
              </h2>
              <p className="text-gray-700 max-sm:text-sm">
                {campaign.description}
              </p>
              <p className="text-lg font-bold max-sm:text-base">
                {campaign.amount}
              </p>
              <button
                className="bg-black text-white px-4 py-2 rounded-[24px] hover:bg-gray-800 max-sm:px-3 max-sm:py-1 max-sm:text-sm max-sm:w-full"
                onClick={() => navigate("/campaigninfo")}
              >
                View Progress
              </button>
            </div>

            {/* Vertical line */}
            <div className="hidden md:block w-px bg-gray-400 mx-4"></div>

            {/* Campaign Status */}
            <div className="flex flex-col items-center space-y-4 max-sm:space-y-2">
              <div
                className={`px-3 py-1 text-sm font-semibold rounded-full  ${
                  campaign.status === "Active"
                    ? "bg-black text-white"
                    : "bg-black text-white"
                } max-sm:px-2 max-sm:py-1`}
              >
                {campaign.status}
              </div>
              <p className="text-sm text-gray-700 max-sm:text-xs">
                {campaign.progress}
              </p>
              <p className="text-sm text-gray-700 max-sm:text-xs">
                {campaign.funding}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activecampaign;
