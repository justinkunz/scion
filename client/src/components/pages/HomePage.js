import React from "react";
import { Redirect } from 'react-router';
import axios from 'axios';
import "./HomePage.css";
import Loader from '../misc/Loader';
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
        this.setState({ signedIn: false, grabbedData: true})
      } else {

        if (request.data[0]) {
          this.setState({ signedIn: true, grabbedData: true, answered_survey: request.data[0].survery_answered  })
        }
        else {
          this.setState({ signedIn: false, grabbedData: true })
        }
      }
    }

  }

  render() {
    console.log(this.state)
    if(!this.state.grabbedData){
     return <Loader />
    }
    if (!this.state.signedIn && this.state.grabbedData) {
      return <Redirect to="/sign_in" />
    }

    if (!this.state.answered_survey && this.state.grabbedData) {
      return <Redirect to="/survey" />
    }
    return <Redirect to="/results" />
  
  }
}

export default HomePage;
