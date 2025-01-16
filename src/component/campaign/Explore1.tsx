import imgs from "../../assets/people.png";
import img from "../../assets/seek.png";
import image from "../../assets/image5.png";
import imag from "../../assets/image6.png";
import Progressbar from "./Progressbar";

const Explore1 = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 justify-center items-center min-h-screen ">
        <div>
          <div className="bg-black w-[438px] h-[668px] rounded-[26px] p-9 flex items-center   flex-col">
            <div className="mt-3">
              <h2 className="text-white text-[32px]">
                <strong>Charity Gala</strong>
              </h2>
              <img src={imgs} alt="" />
              <div>
                <div className="flex justify-between mt-4">
                  <span className="flex items-center gap-3">
                    <img src={image} alt="" />{" "}
                    <p className="text-white">
                      <strong>Books For Bright Futures"</strong>
                    </p>
                  </span>
                  <img src={imag} alt="" />
                </div>
                <p className="text-white text-[16px]">
                  Access to education is a fundamental right, yet millions of
                  children around the world lack the resources they need to
                  succeed. The "Books for Bright Futures" campaign seeks to
                  provide books, school supplies, and scholarships to
                  underprivileged students in our community.
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
                <strong>Homeless</strong>
              </h2>
              <img src={img} alt="" className="flex justify-center" />
              <div>
                <div className="flex justify-between mt-11">
                  <span className="flex items-center gap-3">
                    <img src={image} alt="" />{" "}
                    <p className="text-white">
                      <strong>Home For All</strong>
                    </p>
                  </span>
                  <img src={imag} alt="" />
                </div>
                <p className="text-white text-[16px]">
                   Every night, thousands of individuals and families in our
                  community find themselves without a place to call home. The
                  "Home for All" campaign aims to raise funds to provide
                  shelter, food, and essential services to the homeless
                  population in our area.
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
    </div>
  );
};

export default Explore1;
