import { useEffect, useState } from "react";
import { MdFeedback } from "react-icons/md";
import { Link } from "react-router";
import HomePageSingleFeedback from "../components/HomePageSingleFeedback";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isMoreThenThree, setIsMoreThenThree] = useState([]);

  useEffect(() => {
    fetch(`https://recipe-book-server-mocha.vercel.app/feedbacks`)
      .then((res) => res.json())
      .then((data) => {
        // setFeedbacks(data);
        setIsMoreThenThree(data);
        if (data.length > 3) {
          setFeedbacks(data.slice(0, 3));
        } else {
          setFeedbacks(data);
        }
      });
  }, []);

  return (
    <div className="pb-52 px-3 ">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-7">
        Customer Feedback
      </h1>
      <div
        className={`grid grid-cols-1  md:grid-cols-2 ${
          isMoreThenThree.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        } gap-5`}
      >
        {feedbacks.map((feedback) => (
          <HomePageSingleFeedback key={feedback._id} eachfeedback={feedback} />
        ))}
        {isMoreThenThree.length > 3 ? (
          <Link
            data-tooltip-id="my-tooltip"
            data-tooltip-content="See More Feedback"
            className="flex cursor-pointer hover:bg-[#fef9c290] py-12 md:py-0  flex-col items-center justify-center border border-[#cccccc5f] rounded-md gap-2"
            to={"/allFeedback"}
          >
            <MdFeedback size={35} />
            <h1 className="text-2xl font-semibold">See all feedback</h1>
          </Link>
        ) : (
          ""
        )}
      </div>
      {}
    </div>
  );
};

export default Feedback;
