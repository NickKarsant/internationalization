import React from "react";

class LanguageSelector extends React.COmponent {
  render() {
    return (
      <div>
        Select a Langauge:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
          style={{ marginLeft: "5px" }}
        ></i>
        <i
          className="flag fr"
          onClick={() => this.props.onLanguageChange("french")}
        ></i>
        <i
          className="flag gr"
          onClick={() => this.props.onLanguageChange("greek")}
        ></i>
        <i
          className="flag am"
          onClick={() => this.props.onLanguageChange("armenian")}
        ></i>
        <i
          className="flag cn"
          onClick={() => this.props.onLanguageChange("mandarin")}
        ></i>
        <i
          className="flag mx"
          onClick={() => this.props.onLanguageChange("spanish")}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange("dutch")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
