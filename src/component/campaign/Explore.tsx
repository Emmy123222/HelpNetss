import Progressbar from "./Progressbar";
import Explore1 from "./Explore1";
import Footer from "./Footer";

const Explore = () => {
  return (
    <div className="space-y-6 max-sm:space-y-4 max-sm:p-4 bg-white">
      <div className="flex gap-4 justify-center items-center min-h-screen max-sm:flex-col max-sm:gap-6">
        {/* First Campaign Card */}
        <div className="max-sm:w-full">
          <div className="bg-black w-[438px] h-[350px] rounded-[26px] p-9 flex items-center flex-col max-sm:w-full max-sm:h-auto max-sm:p-6">
            <div className="mt-3 max-sm:mt-0">
              <h2 className="text-white text-[32px] max-sm:text-[24px] text-center">
                <strong>The Ocean Cleanup</strong>
              </h2>
              <div>
                <div className="flex justify-between mt-4 max-sm:mt-2 max-sm:flex-col max-sm:gap-2">
                  <span className="flex items-center gap-3">
                    <p className="text-white text-[16px] max-sm:text-[14px]">
                      <strong>Wallet Address</strong>
                      <p className=" max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                        0xF2A6B7D4935D1aD78172C9b5fD4556C45d123456
                      </p>
                    </p>
                  </span>
                </div>
                <p className="text-white text-[16px] max-sm:text-[14px] mt-4">
                  This initiative focuses on removing plastic from the oceans.
                  The campaign has developed innovative technologies to collect
                  and recycle ocean plastic, raising awareness about marine
                  pollution.
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
          <div className="bg-black w-[438px] h-[350px] rounded-[26px] p-9 flex items-center flex-col max-sm:w-full max-sm:h-auto max-sm:p-6">
            <div className="mt-4 max-sm:mt-0">
              <h2 className="text-white text-[32px] max-sm:text-[24px] text-center">
                <strong>Real Beauty</strong>
              </h2>
              <div>
                <div className="flex justify-between mt-4 max-sm:mt-4 max-sm:flex-col max-sm:gap-2">
                  <span className="flex items-center gap-3">
                    <p className="text-white text-[16px] max-sm:text-[14px]">
                      <strong>Wallet Address</strong>
                      <p className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                        0xA1b2C3D4E5F6789012345678901234567890ABCD
                      </p>
                    </p>
                  </span>
                </div>
                <p className="text-white text-[16px] max-sm:text-[14px] mt-4">
                  This ongoing campaign, started in 2004, focuses on redefining
                  beauty standards by featuring real women of all shapes, sizes,
                  and ethnicities. It promotes self-esteem and body positivity,
                  resonating with many consumers.
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

      {/* Highlight Bar */}
      <div className="bg-black w-full h-[68px] rounded-[24px] max-sm:h-[50px]"></div>

      {/* Explore More */}
      <Explore1 />
      <div className="flex justify-center">
        <div className="w-[370px] h-[39px] text-white bg-black rounded-full flex justify-center items-center max-sm:w-full max-sm:h-[36px]">
          Explore All Campaigns!
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
