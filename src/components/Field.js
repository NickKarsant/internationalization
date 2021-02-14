import React from "react";

class Field extends React.Component {
  render() {
    return (
      <div className="ui field">
        <label>First Name</label>
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
