import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };


  onLanguageChange = (language) => {
    this.setState({language: language});
  }

  render() {
    return (
      <div className="ui container">
        <div>Select a Langauge: 
        <i className="flag us" onClick={() => this.onLanguageChange('english')}  style={{marginLeft: '5px'}} ></i>
        <i className="flag fr" onClick={() => this.onLanguageChange('french')}></i>
        <i className="flag gr" onClick={() => this.onLanguageChange('greek')}></i>
        <i className="flag am" onClick={() => this.onLanguageChange('armenian')}></i>
        <i className="flag cn" onClick={() => this.onLanguageChange('mandarin')}></i>
        <i className="flag mx" onClick={() => this.onLanguageChange('spanish')}></i>
        <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
 