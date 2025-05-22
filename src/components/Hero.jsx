import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import chicken from "../assets/images/chicken.png";
import fruits from "../assets/images/fruits.png";
import salad from "../assets/images/salad.png";
import noddles from "../assets/images/noddles.png";
import biryani from "../assets/images/biryani.png";
import snacks from "../assets/images/snacks.png";
import stick from "../assets/images/stick.png";
import butter from "../assets/images/butter.png";

const images = [
  chicken,
  fruits,
  salad,
  noddles,
  biryani,
  butter,
  snacks,
  stick,
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);
  const desktopControls = useAnimation();
  const desktopControls2 = useAnimation();
  const mobileControls = useAnimation();
  const mobileControls2 = useAnimation();

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768); // or use your preferred breakpoint
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    // mobileControls
    mobileControls.start({
      x: 100,
      y: -200,
      scale: 1,
      transition: { duration: 0.5, bounce: 1, delay: 0.4 },
    });

    // mobileControls2
    mobileControls2.start({
      x: 0,
      y: 200,
      scale: 1,
      transition: { duration: 0.5, bounce: 1, delay: 0.4 },
    });

    //desktopControls
    desktopControls.start({
      x: -330,
      y: -100,
      scale: 1,
      transition: { duration: 0.5, bounce: 1, delay: 0.4 },
    });

    // desktopControls2
    desktopControls2.start({
      x: 420,
      y: 220,
      scale: 1,
      transition: { duration: 0.5, bounce: 1, delay: 0.4 },
    });

    // image animation
    const interval = setInterval(() => {
      setShow(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setShow(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [mobileControls, mobileControls2, desktopControls, desktopControls2]);

  return (
    <div
      className="min-h-screen lg:h-[calc(80vh-65px)] flex -mt-24 items-center    md:justify-center"
      style={{ overflowX: "hidden" }}
    >
      <div className="relative  w-full">
        {/* controls 1  */}
        <motion.h1
          animate={isMobile ? mobileControls : desktopControls}
          initial={{ scale: 0 }}
          className="text-6xl md:text-7xl  font-semibold"
        >
          Healty
        </motion.h1>
        {/* image animation  */}
        {/* <figure className="w-full bg-red-500"> */}
        <AnimatePresence mode="wait" className="">
          {show && (
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="Animated Slide"
              className=" sm:px-2 -full object-cover absolute top-1/2 md:top-1/2 left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 min-h-[370px] px-2 rounded  mx-auto  lg:max-w-[650px]  z-20"
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
        {/* </figure> */}
        {/* overlay card  */}
        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          className="absolute  right-1 left-1  md:-left-60 -bottom-[360px] md:-bottom-52  backdrop-blur-md max-w-fit  border border-[#cccccc46] md:border-0 md:max-w-md px-2 md:px-5 py-2  md:py-3 rounded-xl z-20"
        >
          <p>
            A user-friendly recipe book app offering a variety of healthy,
            easy-to-cook meals. Perfect for clean eating, weight management, and
            maintaining a balanced, nutritious lifestyle every day.
          </p>
        </motion.div>
        {/* controls 2  */}
        <motion.h1
          animate={isMobile ? mobileControls2 : desktopControls2}
          initial={{ scale: 0 }}
          className="text-6xl text-center   md:text-7xl font-semibold"
        >
          Starts Here
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
