import React, { use, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AuthContext } from "../store/contexts";
import { format } from "date-fns";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "1000px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddFeedbackDiolog = ({ isModalOpen, setIsModalOpen, recipe }) => {
  const { title, image, email } = recipe;
  const creationTime = format(new Date(), "E, p, PP");
  //   console.log(recipe);

  function closeModal() {
    setIsModalOpen(false);
  }

  const handleFeedback = (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const feedback = e.target.feedback.value;
    const newFeedback = { rating, feedback, title, image, email, creationTime };

    fetch(`http://localhost:5000/add-feedback`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Thanks! To your feeback!");
          setIsModalOpen(false);
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1 className="text-3xl pb-5 font-semibold text-center">
          Add Feedback
        </h1>
        <form
          onSubmit={handleFeedback}
          className=" border border-[#cccccc9c] rounded-lg  px-4 py-3"
          //  onSubmit={handleAUpdateRecipe}
        >
          <div className="flex gap-5">
            <figure className=" w-1/2">
              <img src={image} alt="feedback image" />
            </figure>
            <div className="bgamber-100 space-y-2    w-1/2">
              {/* ratings  */}
              <legend className="fieldset-legend ">Ratings</legend>
              <input
                type="text"
                required
                name="rating"
                className="input w-full"
                placeholder="write a rating 1-5"
              />
              {/* feedback  */}
              <legend className="fieldset-legend ">Feedback</legend>
              <textarea
                required
                name="feedback"
                className="textarea h-max  w-full resize-none"
                placeholder="Write a feedback...."
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-block mt-5 btn-warning ">
            Add feedback
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddFeedbackDiolog;
