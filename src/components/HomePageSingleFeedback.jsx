import React, { useState } from "react";
import FeedbackImageDiolog from "../UI/FeedbackImageDiolog";

const HomePageSingleFeedback = ({ eachfeedback }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { email, image, title, feedback, rating, creationTime } = eachfeedback;

  return (
    <div className="border border-[#cccccc5f] rounded-md px-4 py-3 hover:bg-[#cccccc28] ">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">{title}</h1>
        <div className="avatar">
          <div className="w-12 rounded-xl">
            <img
              onMouseEnter={() => setIsModalOpen(true)}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Click and see image"
              src={image}
              className="cursor-pointer"
              alt="feedback image"
            />
          </div>
        </div>
      </div>
      <p className="font-semibold">
        Ratings: <span className="font-normal">{rating}</span>
      </p>
      <p className="mt-1 font-semibold">
        Creation Time: <span className="font-normal">{creationTime}</span>
      </p>
      <p className="font-semibold mt-1">
        Feedback:{" "}
        <span className="font-normal">
          {feedback.length > 200 ? `${feedback.slice(0, 100)}.....` : feedback}
        </span>
      </p>
      {isModalOpen && (
        <FeedbackImageDiolog
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          eachfeedback={eachfeedback.image}
        />
      )}
    </div>
  );
};

export default HomePageSingleFeedback;
