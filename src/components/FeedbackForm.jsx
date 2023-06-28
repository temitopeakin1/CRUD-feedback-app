import { useState, useEffect } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState();

  const { addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
      setMessage(feedbackEdit.item.message);
    }
  }, [feedbackEdit]); // should be a dependency because we don't want the edit to run once, it should run as many times as possible, when the edit btn is clicked

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 charaters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }
      
   

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> Rate Our Service</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Place a Review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
