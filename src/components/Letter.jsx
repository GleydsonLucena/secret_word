import PropTypes from "prop-types";

import "../assets/styles/Letter.sass";

const Letter = ({ letter, classCustom }) => {
  return (
    <div className={"letter-container"}>
      <div className={classCustom}>{letter}</div>
    </div>
  );
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  classCustom: PropTypes.string,
};

export default Letter;
