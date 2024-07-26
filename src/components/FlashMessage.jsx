import PropTypes from "prop-types";
import "../assets/styles/FlashMessage.sass";

const FlashMessage = ({ children }) => {
  return <p className="container-msg">{children}</p>;
};

FlashMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlashMessage;
