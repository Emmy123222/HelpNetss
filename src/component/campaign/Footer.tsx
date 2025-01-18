import eli from "../../assets/Ellipse 7 (1).png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";
import copy from "../../assets/copy.png";

const Footer = () => {
  return (
    <div className="bg-black p-16 w-full h-[400px] mt-24 flex flex-col max-sm:p-6 max-sm:h-auto max-sm:mt-12">
      <div>
        <h1 className="text-2xl text-white font-bold text-center max-sm:text-xl">
          Revolutionizing Humanitarian Aid With Blockchain Transparency
        </h1>
        <div className="flex items-center justify-center mt-8 max-sm:flex-col max-sm:mt-6 max-sm:gap-4">
          <img
            src={eli}
            alt=""
            className="w-[168px] h-[146px] max-sm:w-[120px] max-sm:h-[100px]"
          />
          <h1 className="text-[96px] font-bold text-center text-white  max-sm:text-[40px]">
            <strong>HelpNet</strong>
          </h1>
        </div>
        <div className="flex justify-between items-center mt-8 max-sm:flex-col max-sm:gap-6">
          {/* Follow Us Section */}
          <div className="max-sm:text-center">
            <p className="text-[20px] text-white  max-sm:text-[16px]">
              Follow us
            </p>
            <div className="flex gap-2 justify-center mt-2">
              <img src={twitter} alt="" className="max-sm:w-6 max-sm:h-6" />
              <img src={insta} alt="" className="max-sm:w-6 max-sm:h-6" />
              <img src={youtube} alt="" className="max-sm:w-6 max-sm:h-6" />
            </div>
          </div>
          {/* Copyright Section */}
          <div className="flex gap-2 items-center max-sm:flex-col max-sm:text-center">
            <img
              src={copy}
              alt=""
              className="max-sm:w-6 max-sm:h-6 max-sm:mb-2"
            />
            <p className="text-white  text-[16px] max-sm:text-sm">
              @2025 HelpNet All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
