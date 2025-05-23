import { useLoaderData } from "react-router";
import SingleFeedback from "../components/SingleFeedback";
import useScrollToTop from "../hooks/useScrollToTop";
import useTitle from "../hooks/useTitle";

const AllFeedback = () => {
  useTitle("Feedback");
  useScrollToTop();

  const intialFeedbacks = useLoaderData();
  return (
    <div className="pt-12 pb-24 px-3">
      <h1 className="text-3xl font-semibold mb-6">All Feedback</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {intialFeedbacks.map((feedback) => (
          <SingleFeedback key={feedback._id} eachfeedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default AllFeedback;
