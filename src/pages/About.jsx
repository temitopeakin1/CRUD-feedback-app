import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const About = () => {
  return (
    <Card>
      <div className="about">
        <p>This is a feedback app with CRUD functionalities</p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
