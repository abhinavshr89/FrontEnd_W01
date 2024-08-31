import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, content, index }, ref) => (
  <div ref={ref} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ForwardedFeatureCard = React.forwardRef(FeatureCard);

const Business = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { x: 50, opacity: 0 }, 
          { 
            x: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%", 
              end: "bottom 60%",
              toggleActions: "play none none none", // Only plays the animation, no reverse or reset
              once:true,
            },
          }
        );
      }
    });
  }, []);
  

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <ForwardedFeatureCard 
            key={feature.id} 
            {...feature} 
            index={index} 
            ref={(el) => (cardRefs.current[index] = el)} 
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
