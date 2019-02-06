import React from "react";
import Navbar from "../misc/Navbar";
import { Redirect } from 'react-router';
import axios from 'axios';

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
        this.setState({ signedIn: false, grabbedData: true })
      } else {
        this.setState({ signedIn: true, grabbedData: true, topMsg: "Welcome " + request.data[0].first_name })
      }
    }

  }

  render() {
    if (this.state.signedIn === false && this.state.grabbedData === true) {
      this.props.signOutUser();
      return <Redirect to="/sign_in" />
    }
    return (
      <div>

        <Navbar activePage="Home" signedIn={this.state.signedIn} />
        <div className="welcomeMsg">{this.state.topMsg}</div>
        HOME PAGE
      </div>
    );
  }
}

export default HomePage;
