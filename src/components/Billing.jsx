import { useEffect } from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Billing = () => {
  
  useEffect(() => {
    gsap.fromTo(
      ".--stg-animation", 
      { x: 100, opacity: 0 }, // Start state: shifted to the right and invisible
      {
        x: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.out",
        stagger:0.4,
        scrollTrigger: {
          trigger: ".--stg-animation",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  
  return(
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} --stg-animation`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 --stg-animation`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
