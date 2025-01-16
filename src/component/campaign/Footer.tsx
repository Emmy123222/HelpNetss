import eli from "../../assets/Ellipse 7 (1).png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";
import copy from "../../assets/copy.png";
const Footer = () => {
  return (
    <div className="bg-pink-100 p-16 w-full h-[400px] mt-24 flex flex-col ">
      <div>
        <h1 className="text-2xl text-black font-bold text-center">
          Revolutionizing Humanitarian Aid With Blockchain Transparency
        </h1>
        <div className="flex items-center justify-center mt-8">
          <img src={eli} alt="" className="w-[168px] h-[146px]" />
          <h1 className="text-[96px] font-bold text-center text-black">
            <strong>HelpNet</strong>
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[20px] text-black">Follow us</p>
            <div className="flex gap-2">
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={copy} alt="" />
            <p className="text-black">@2025 HelpNet All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
