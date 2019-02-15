import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  getClassNames = page => {
    if (page === this.props.activePage) {
      return "active item";
    }

    return "item";
  };
  render() {
    if (this.props.signedIn) {
      return (
        <div>
          <div className="ui secondary pointing menu">
            <a href="/userhome" className={this.getClassNames("Home")}>
              <h3>SCION</h3>
            </a>
            <a
              href="/survey"
              className={this.getClassNames("Preference Survey")}
            >
              {this.props.survey}
            </a>
            <div className="right menu">
              <a
                href="/sign_out"
                className="ui item"
                className={this.getClassNames("signUp")}
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      );
    }


    return (
      <div>
        <div className="ui secondary pointing menu">
          <a href="/" className={this.getClassNames("Home")}>
            <h3>SCION</h3>
          </a>
          <div className="right menu">
            <a
              href="/sign_up"
              className="ui item"
              className={this.getClassNames("signUp")}
            >
              Sign Up
            </a>

            <a href="/sign_in" className={this.getClassNames("signIn")}>
              Sign In
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
