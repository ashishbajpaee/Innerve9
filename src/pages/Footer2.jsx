import React from "react";
import creamRoth from "../assets/creamRoth.svg";
import cord from "../assets/cord.svg";
import gram from "../assets/gram.svg";
import ins from "../assets/ins.svg";
import twir from "../assets/twir.svg";
import lock from "../assets/lock.svg";
import BlinkingDot from "../components/blinking.jsx";
import "./Footer2.css";
import mapFrameImage from "../assets/card.png";
import Secratry from "../components/Secratry.jsx";
import Female from "../assets/female_sec.png"; // Correctly import the image
import Male from "../assets/male_sec.png";
const Footer2 = () => {
  const planets = [
    { id: 1, img: lock, alt: "Lock Icon" },
    { id: 2, img: gram, alt: "Gram Icon" },
    { id: 3, img: lock, alt: "Lock Icon" },
    { id: 4, img: twir, alt: "Twitter Icon" },
    { id: 5, img: cord, alt: "Cord Icon" },
    { id: 6, img: lock, alt: "Lock Icon" },
    { id: 7, img: ins, alt: "Instagram Icon" },
    { id: 8, img: lock, alt: "Lock Icon" },
    { id: 9, img: lock, alt: "Lock Icon" },
    { id: 10, img: lock, alt: "Lock Icon" },
  ];

  return (
    <div className="footer-container">
      <div className="box flex flex-col md:flex-row md:gap-[25rem] w-[100%] ">

      <div className="w-[33%] flex gap-[2rem] flex-col justify-between">
      <div className="flex-grow"></div> {/* This takes up remaining space */}
      <div className="flex flex-col gap-[2rem]">
        <Secratry Name="Deepshika Rawat" contactNumber="+91 639 879 3447" ImageSrc={Female}/>
        <Secratry Name="Kaushal Vyas" contactNumber="+91 866 895 2920" ImageSrc={Male}/>
      </div>
      <div></div>
    </div>

      {/* Solar System Section */}
      <div className="w-[33%]">

      <div className="solar-system">
        <div className="sun">
          <img src={creamRoth} alt="Cream Roth Logo" />
          <div className="board">CONNECT WITH US!</div>
        </div>
        {planets.map((planet, index) => (
          <div key={index} className={`planet planet${index + 1}`}>
            <img src={planet.img} alt={planet.alt} />
          </div>
        ))}
      </div>
      </div>

      <div className="w-[33%] flex justify-center items-center">
          
      {/* Contact Section */}
      <div className="xl:w-1/4 flex flex-col items-center justify-center mt-[6rem]">
      <h3 className="text-xl font-semibold mb-2">Venue</h3>
      <div className="relative w-[280px] h-[200px] mt-2 flex items-center justify-center">
        <img
          src={mapFrameImage}
          alt="Map Frame"
          className="absolute w-full h-full object-contain"
          />
        <iframe
          title="Venue Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2698970162255!2d73.87251157543034!3d18.606926382503463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c710e77af169%3A0x585dffe6ae2cf0f0!2s20%2C%20St%20Dnyaneshwar%20Rd%2C%20Runwal%20Park%2C%20Vijay%20Nagar%2C%20Dighi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411015!5e0!3m2!1sen!2sin!4v1732267644510!5m2!1sen!2sin"
          width="180"
          height="180"
          className="absolute top-[10px] left-[48px] right-[10px] bottom-[10px] border-none rounded-xl"
          allowFullScreen=""
          loading="fast"
          ></iframe>
      </div>
    </div>
    </div>

      </div>

        <div>
        <div className="border-t border-[#9CA3AF] w-full min-h-10 
      flex flex-col 
      md:flex-row 
      md:items-center 
      md:justify-center">
      <div className="w-[95%] 
        flex flex-col 
        md:flex-row 
        items-center 
        justify-between 
        space-y-4 
        md:space-y-0">
        <div className="flex items-center gap-[10px]">
          {/* <BlinkingDot /> */}
        </div>
        
        <div className="text-[#9CA3AF] text-[15px] md:text-[18px] text-center">
          Made with ❤️ by Open Source Software Club
        </div>
        
        <div className="flex gap-[15px]">
          {/* <img src={discord1} alt="Discord" className="w-6 h-6 md:w-auto md:h-auto" />
          <img src={github} alt="GitHub" className="w-6 h-6 md:w-auto md:h-auto" />
          <img src={meta} alt="Meta" className="w-6 h-6 md:w-auto md:h-auto" />
          <img src={X_1} alt="X" className="w-6 h-6 md:w-auto md:h-auto" />
          <img src={linkedIn} alt="LinkedIn" className="w-6 h-6 md:w-auto md:h-auto" /> */}
        </div>
      </div>
    </div>
        </div>
      
    </div>
  );
};

export default Footer2;
