import imgs from "../../assets/people.png";
import img from "../../assets/seek.png";
import image from "../../assets/image5.png";
import imag from "../../assets/image6.png";
import Progressbar from "./Progressbar";

const Explore1 = () => {
  return (
    <div className="space-y-6 max-sm:space-y-4 ">
      <div className="flex gap-4 justify-center items-center min-h-screen max-sm:flex-col max-sm:gap-6">
        {/* First Campaign Card */}
        <div className="max-sm:w-full">
          <div className="bg-black w-[438px] h-fit rounded-[26px] p-9 flex items-center flex-col max-sm:w-full max-sm:h-auto max-sm:p-6">
            <div className="mt-3 max-sm:mt-0">
              <h2 className="text-white text-[32px] max-sm:text-[24px] text-center">
                <strong>Charity Gala</strong>
              </h2>
              {/* <img src={imgs} alt="" className="max-sm:w-full max-sm:mt-4" /> */}
              <div>
                <div className="flex justify-between mt-4 max-sm:mt-2 max-sm:flex-col max-sm:gap-2">
                  <span className="flex items-center gap-3">
                    {/* <img src={image} alt="" className="max-sm:w-8" /> */}
                    <p className="text-white text-[16px] max-sm:text-[14px]">
                      <strong>Books For Bright Futures</strong>
                    </p>
                  </span>
                  {/* <img src={imag} alt="" className="max-sm:w-8" /> */}
                </div>
                <p className="text-white text-[16px] max-sm:text-[14px] mt-4">
                  Access to education is a fundamental right, yet millions of
                  children around the world lack the resources they need to
                  succeed. The "Books for Bright Futures" campaign seeks to
                  provide books, school supplies, and scholarships to
                  underprivileged students in our community.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 max-sm:mt-2">
            <Progressbar total={100} raised={30} supporters={30} daysLeft={5} />
          </div>
        </div>

        {/* Second Campaign Card */}
        <div className="max-sm:w-full">
          <div className="bg-black w-[438px] h-fit rounded-[26px] p-9 flex items-center flex-col max-sm:w-full max-sm:h-auto max-sm:p-6">
            <div className="mt-4 max-sm:mt-0">
              <h2 className="text-white text-[32px] max-sm:text-[24px] text-center">
                <strong>Homeless</strong>
              </h2>
              {/* <img src={img} alt="" className="max-sm:w-full max-sm:mt-4" /> */}
              <div>
                <div className="flex justify-between mt-11 max-sm:mt-4 max-sm:flex-col max-sm:gap-2">
                  <span className="flex items-center gap-3">
                    {/* <img src={image} alt="" className="max-sm:w-8" /> */}
                    <p className="text-white text-[16px] max-sm:text-[14px]">
                      <strong>Home For All</strong>
                    </p>
                  </span>
                  {/* <img src={imag} alt="" className="max-sm:w-8" /> */}
                </div>
                <p className="text-white text-[16px] max-sm:text-[14px] mt-4">
                   Every night, thousands of individuals and families in our
                  community find themselves without a place to call home. The
                  "Home for All" campaign aims to raise funds to provide
                  shelter, food, and essential services to the homeless
                  population in our area.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 max-sm:mt-2">
            <Progressbar
              total={100}
              raised={20}
              supporters={1000}
              daysLeft={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore1;
