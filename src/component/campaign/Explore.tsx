import imgs from "../../assets/image4.png";
import img from "../../assets/image7.png";
import image from "../../assets/image5.png";
import imag from "../../assets/image6.png";
import Progressbar from "./Progressbar";
import Explore1 from "./Explore1";
import Footer from "./Footer";

const Explore = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 justify-center items-center min-h-screen ">
        <div>
          <div className="bg-black w-[438px] h-[668px] rounded-[26px] p-9 flex items-center   flex-col">
            <div className="mt-3">
              <h2 className="text-white text-[32px]">
                <strong>The Ocean Cleanup</strong>
              </h2>
              <img src={imgs} alt="" />
              <div>
                <div className="flex justify-between mt-4">
                  <span className="flex items-center gap-3">
                    <img src={image} alt="" />{" "}
                    <p className="text-white">
                      <strong>Dove</strong>
                    </p>
                  </span>
                  <img src={imag} alt="" />
                </div>
                <p className="text-white text-[16px]">
                  This initiative focuses on removing plastic from the oceans.
                  The campaign has developed innovative technologies to collect
                  and recycle ocean plastic, raising awareness about marine
                  pollution.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  ">
            <Progressbar total={100} raised={30} supporters={30} daysLeft={5} />
          </div>
        </div>
        <div>
          <div className="bg-black w-[438px] h-[668px] rounded-[26px] p-9 flex items-center justify-center flex-col ">
            <div className="mt-4">
              <h2 className="text-white text-[32px]">
                <strong>Real Beauty</strong>
              </h2>
              <img src={img} alt="" className="flex justify-center" />
              <div>
                <div className="flex justify-between mt-11">
                  <span className="flex items-center gap-3">
                    <img src={image} alt="" />{" "}
                    <p className="text-white">
                      <strong>Dove</strong>
                    </p>
                  </span>
                  <img src={imag} alt="" />
                </div>
                <p className="text-white text-[16px]">
                  This ongoing campaign, started in 2004, focuses on redefining
                  beauty standards by featuring real women of all shapes, sizes,
                  and ethnicities. It promotes self-esteem and body positivity,
                  resonating with many consumers.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  ">
            <Progressbar
              total={100}
              raised={20}
              supporters={1000}
              daysLeft={5}
            />
          </div>
        </div>
      </div>
      <div className="bg-pink-100 w-full h-[68px] rounded-[24px]"></div>
      <Explore1 />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
