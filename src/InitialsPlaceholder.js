import React, { useEffect, useState } from "react";
import "./index.css";
import PropTypes from "prop-types";

const InitialsPlaceholder = ({ value, bgColor, size, textColor, fontSize }) => {
  const [firstInitial, setFirstInitial] = useState("");
  const [secondInitial, setSecondInitial] = useState("");

  useEffect(() => {
    let words = value.trim().split(/\s+/);
    if (words.length === 1) {
      setFirstInitial(words[0].charAt(0).toUpperCase());
      setSecondInitial("");
    } else if (words.length > 1) {
      setFirstInitial(words[0].charAt(0).toUpperCase());
      setSecondInitial(words[1].charAt(0).toUpperCase());
    } else {
      setFirstInitial("");
      setSecondInitial("");
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        background: `${bgColor}`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
      }}
    >
      <span
        style={{
          position: "absolute",
          margin: "0 auto",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          color: `${textColor}`,
          fontSize: `${fontSize}px `,
          fontWeight: 500,
          fontFamily: "sans-serif",
        }}
        className="disableHighlight"
      >
        {firstInitial + secondInitial}
      </span>
    </div>
  );
};

InitialsPlaceholder.propTypes = {
  value: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
};

InitialsPlaceholder.defaultProps = {
  value: "",
  bgColor: "#4285F4",
  size: 40,
  textColor: "#fff",
  fontSize: 18,
};

export default InitialsPlaceholder;
