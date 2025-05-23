import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import chicken from "../assets/images/chicken.png";
import fruits from "../assets/images/fruits.png";
import salad from "../assets/images/salad.png";
import noddles from "../assets/images/noddles.png";
import biryani from "../assets/images/biryani.png";
import stick from "../assets/images/stick.png";
import butter from "../assets/images/butter.png";

const images = [chicken, fruits, salad, noddles, biryani, butter, stick];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);

  const mobileControls1 = useAnimation();
  const mobileControls2 = useAnimation();
  const desktopControls1 = useAnimation();
  const desktopControls2 = useAnimation();

  // Update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trigger animations based on device type
  useEffect(() => {
    if (isMobile) {
      mobileControls1.start({
        x: 0,
        y: -200,
        scale: 1,
        transition: { duration: 0.5, bounce: 1, delay: 0.4 },
      });
      mobileControls2.start({
        x: 0,
        y: 210,
        scale: 1,
        transition: { duration: 0.5, bounce: 1, delay: 0.4 },
      });
    } else {
      desktopControls1.start({
        x: -290,
        y: -220,
        scale: 1,
        transition: { duration: 0.5, bounce: 1, delay: 0.4 },
      });
      desktopControls2.start({
        x: 215,
        y: 290,
        scale: 1,
        transition: { duration: 0.5, bounce: 1, delay: 0.4 },
      });
    }
  }, [isMobile]);

  // Image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setShow(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen lg:h-[calc(80vh-65px)] flex -mt-24 items-center md:justify-center"
      style={{ overflowX: "hidden" }}
    >
      <div className="relative w-full">
        {/* Title 1 */}
        <motion.h1
          animate={isMobile ? mobileControls1 : desktopControls1}
          initial={{ scale: 0 }}
          className="text-5xl md:text-6xl text-center lg:text-7xl font-semibold"
        >
          Healty
        </motion.h1>

        {/* Animated Image */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="Slide"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-[370px] px-2 rounded mx-auto max-w-[390px] md:max-w-[550px] lg:max-w-[600px] z-20"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Overlay Text */}
        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          className="absolute right-1 left-1 lg:left-20 md:left-2 -bottom-[360px] md:-bottom-52 backdrop-blur-md border border-[#cccccc2f]  md:max-w-sm lg:max-w-md px-2 md:px-5 py-2 md:py-3 rounded-xl z-20"
        >
          <p>
            A user-friendly recipe book app offering a variety of healthy,
            easy-to-cook meals. Perfect for clean eating, weight management, and
            maintaining a balanced, nutritious lifestyle every day.
          </p>
        </motion.div>

        {/* Title 2 */}
        <motion.h1
          animate={isMobile ? mobileControls2 : desktopControls2}
          initial={{ scale: 0 }}
          className="text-5xl md:text-6xl text-center  lg:text-7xl font-semibold"
        >
          Starts Here
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
