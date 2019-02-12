import React from "react";
import Navbar from "../misc/Navbar";
import { Redirect } from 'react-router';
import axios from 'axios';
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { topMsg: '', grabbedData: false, signedIn: false }
  }

  componentDidMount() {
    this.verifyUser()
  }


  verifyUser = async () => {

    const token = localStorage.getItem("token")

    if (!token) {
      this.setState({ signedIn: false, grabbedData: true })
    }
    else {
      const request = await axios.post('/api/currentUser', { token: localStorage.getItem("token") })

      if (request.data === "redirect") {
        this.setState({ signedIn: false, grabbedData: true, answered_survey: request.data.answered_survey })
      } else {

        if (request.data[0]) {
          this.setState({ signedIn: true, grabbedData: true, topMsg: "Welcome " + request.data[0].first_name })
        }
        else {
          this.setState({ signedIn: false, grabbedData: true })
        }
      }
    }

  }

  render() {

    if (!this.state.signedIn && this.state.grabbedData) {
      this.props.signOutUser();
      return <Redirect to="/welcome" />
    }

    if (!this.state.answered_survey && this.state.grabbedData) {
      return <Redirect to="/survey" />
    }
    return (
      <div>
        <Navbar activePage="" signedIn={this.state.signedIn} />
        <div className="welcomeMsg">{this.state.topMsg}</div>
      </div>
    );
  }
}

export default HomePage;
