import { AnimatePresence, motion } from "framer-motion";
import { MdCancel } from "react-icons/md";

const FeedbackImageDiolog = ({ isModalOpen, setIsModalOpen, eachfeedback }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            // onRequestClose={() => setIsModalOpen(false)}
            className="fixed  inset-0 bg-[#ccccccab] bg-opacity-40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          ></motion.div>

          {/* Modal Box */}
          <motion.div
            className="fixed w-4/5 md:w-auto  top-1/2 left-1/2 bg-white p-1 rounded-lg shadow-xl z-50  transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full" src={eachfeedback} alt="" />
            <button
              onClick={() => setIsModalOpen(false)}
              className="cursor-pointer bg-white rounded-full  absolute top-1 right-1"
            >
              <MdCancel size={30} color="red" />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FeedbackImageDiolog;
