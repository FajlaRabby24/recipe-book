import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import chicken from "../assets/images/chicken.png";
import fruits from "../assets/images/fruits.png";
import salad from "../assets/images/salad.png";
import noddles from "../assets/images/noddles.png";
import biryani from "../assets/images/biryani.png";

const images = [chicken, fruits, salad, noddles, biryani];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    // controls 1
    controls.start({
      x: -330,
      y: -100,
      scale: 1,
      transition: { duration: 0.5, bounce: 1, delay: 0.4 },
    });

    // control 2
    controls2.start({
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
  }, [controls, controls2]);

  return (
    <div className="h-[calc(80vh-65px)] mb-40  flex items-center justify-center">
      <div className="relative">
        {/* controls 1  */}
        <motion.h1
          animate={controls}
          initial={{ scale: 0 }}
          className="text-7xl  font-semibold"
        >
          Healty
        </motion.h1>
        {/* image animation  */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="Animated Slide"
              className=" object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded  mx-auto max-w-[650px] z-20"
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
        {/* overlay card  */}
        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          className="absolute -left-60 -bottom-52  backdrop-blur-md max-w-md px-5 py-3 rounded-xl z-50"
        >
          <p>
            A user-friendly recipe book app offering a variety of healthy,
            easy-to-cook meals. Perfect for clean eating, weight management, and
            maintaining a balanced, nutritious lifestyle every day.
          </p>
        </motion.div>
        {/* controls 2  */}
        <motion.h1
          animate={controls2}
          initial={{ scale: 0 }}
          className="text-7xl font-semibold"
        >
          Starts Here
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
