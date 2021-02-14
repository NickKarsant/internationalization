import React from "react";
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Míngzì';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input style={{width: '50%' }}/>
        <label>Last Name</label>
        <input style={{width: '50%' }} />
        <label>Email</label>
        <input style={{width: '75%' }}/>
      </div>
    );
  }
}

export default Field;
