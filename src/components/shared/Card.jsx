import PropTypes from 'prop-types'


//children is a node, while reverse is a boolean
function Card({ children, reverse }) {
  return (
    <div
      className="card"
      // conditional styling
      style={{
        backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
        color: reverse ? "#fff" : "rgba(0, 0, 0, 0.4)",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired, // children is a node
  reverse: PropTypes.bool, // reverse is boolean
}



export default Card
