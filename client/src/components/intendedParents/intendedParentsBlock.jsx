import React, { Component } from "react";

class IntendedParents extends Component {
  state = {};

  render() {
    return (
      <div className="alert alert-success col-8 offset-2" role="alert">
        <h4 className="alert-heading">Intended Parents</h4>
        <p>
          Click the button below in order to fill out a survey. We will use the
          results of the survey to find potential matches for a gestational
          carrier, or surogate (if either are an option please denote "Both" in
          the survey). As such please be as honest as possible with during the
          survey so that we may find the best possible match for you. Rest
          assured your information will not be given out by us without your
          implicint consent. If you are unsure about the terms an intended
          parent needs to meet please check out our help documents.
        </p>
        <hr />
        <button className="btn btn-info btn-lg m-2">Take Survey</button>
      </div>
    );
  }
}

export default IntendedParents;
