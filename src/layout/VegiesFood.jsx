import React from "react";
import veggie from "../assets/images/veggie.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const words = [
  "Veggie Food Goes On",
  "Greens fuel your life",
  "Eat plants, stay strong",
  "Nature's gifts taste best",
  "Go green, live clean",
  "Wholesome food, happy body",
  "Veg power never ends",
  "Fresh food, fresh mind",
];

const VegiesFood = () => {
  return (
    <div className="px-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      {/* content  */}
      <div className="space-y-3 lg:space-y-5 px-3 md:pl-2 ">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl md:font-semibold mb-3 leading-10 md:leading-12 lg:leading-16">
          | <Typewriter loop={true} words={words} />
        </h1>
        <p>
          Veggie Food Goes On And Always On" celebrates the endless journey of
          wholesome, plant-based eating that fuels energy, health, and
          sustainability every day.
        </p>
        <div className="flex  items-center gap-6">
          <h3 className="flex text-center flex-col gap-1 items-center">
            <p className="text-2xl md:text-3xl  font-semibold ">1500</p>
            <span>Sold Product</span>
          </h3>
          <h3 className="flex text-center gap-1 flex-col items-center">
            <p className="text-2xl md:text-3xl font-semibold ">500</p>
            <span>Possitive Feedback</span>
          </h3>
          <h3 className="flex text-center gap-1 flex-col items-center">
            <p className="text-2xl md:text-3xl font-semibold ">400</p>
            <span>Official Store</span>
          </h3>
        </div>
        <button className="btn btn-lg rounded-full btn-warning flex gap-0">
          Get Spacial Promo <MdKeyboardArrowRight size={30} />
        </button>
      </div>
      {/* image  */}
      <figure>
        <img className="rounded-md w-full " src={veggie} alt="veggie image" />
      </figure>
    </div>
  );
};

export default VegiesFood;
