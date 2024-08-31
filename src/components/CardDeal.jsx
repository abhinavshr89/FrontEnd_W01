import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";

const CardDeal = () => {
  
  useEffect(() => {
    gsap.fromTo(
      ".--stg-animation-two", 
      { x: -100, opacity: 0 }, 
      {
        x: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.out",
        stagger:0.4,
        scrollTrigger: {
          trigger: ".--stg-animation-two",
          start: "top 80%", 
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  
  
  return(
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} --stg-animation-two`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} --stg-animation-two`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
)};

export default CardDeal;
