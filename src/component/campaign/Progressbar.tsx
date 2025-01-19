interface ProgressbarProps {
  total: number;
  raised: number;
  supporters: number;
  daysLeft: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({
  total,
  raised,
  supporters,
  daysLeft,
}) => {
  const percentage = Math.min((raised / total) * 100, 100).toFixed(0); // Ensure it doesn't exceed 100%

  return (
    <div className="bg-[#9A92929C] text-white p-4 rounded-[24px] w-full ">
      {/* Top Row */}
      <div className="flex justify-between text-sm font-semibold">
        <p>${raised.toFixed(2)} USD</p>
        <p>{supporters} Supporters</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-black">
        <div className="relative  bg-black h-3 rounded-md mt-2">
          <div
            className="bg-teal-400 h-3 rounded-md"
            style={{ width: `${percentage}%` }}
          ></div>
          <span className="absolute inset-0 flex justify-center items-center text-sm font-bold">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between text-sm font-semibold mt-2">
        <p>
          {percentage}% of {total}%
        </p>
        <p>{daysLeft} days left</p>
      </div>
    </div>
  );
};

export default Progressbar;
