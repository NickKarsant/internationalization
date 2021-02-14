import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>

      {(color) => (
        <button className={`ui button mini ${color}`}>
          <LanguageContext.Consumer>
            {value => (value === "english" ? "Submit" : "Tíjiāo")}
          </LanguageContext.Consumer>
        </button>
      )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
