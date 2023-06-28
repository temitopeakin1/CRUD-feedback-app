// import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  // const [rating, setRating] = useState(0);
  // const [text, setText] = useState("");

  // const handleClick = (id) => {
  //   console.log(id);
  // };

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="green" />
      </button>

    </Card>
  );
}

// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired
// }

export default FeedbackItem;
