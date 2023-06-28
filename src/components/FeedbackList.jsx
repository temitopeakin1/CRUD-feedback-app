import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  // extract what we want from our feedback context
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback at the moment</p>;
  }

  return isLoading ? <h3>Loading...</h3> : (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))} 
    </AnimatePresence>
  </div>
  )


  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id}
  //        item={item}
  //        handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
};

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
