import PropTypes from "prop-types";
import "../assets/styles/Button.sass";

const Button = ({ onClick, type, text, width }) => {
  return (
    <button className={`btn ${width}`} onClick={onClick} type={type}>
      {text.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Button;
