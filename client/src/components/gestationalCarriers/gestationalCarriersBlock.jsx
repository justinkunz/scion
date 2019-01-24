import React, { Component } from "react";

class GestationalCarriers extends Component {
  state = {};
  render() {
    return (
      <div className="alert alert-primary col-8 offset-2" role="alert">
        <h4 className="alert-heading">Gestational Carriers</h4>
        <p>
          Click the button below in order to fill out a survey. We will use the
          results of the survey to help intended parents connect with you.
          Please be as honest, and candid as possible when filling out this
          survey. Your data will also be keep private and will not be given out
          without your consent. Keep in mind the criteria for gestational
          carriers, and surrogates differ slightly. If you are unsure if whether
          or not being a gestational carrier may or may not be right for you,
          please reference our help documents.
        </p>
        <hr />
        <button className="btn btn-info btn-lg m-2">Take Survey</button>
      </div>
    );
  }
}

export default GestationalCarriers;
