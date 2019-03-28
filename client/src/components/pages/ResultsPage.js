import React from "react";
import Navbar from "../misc/Navbar";
import axios from "axios";
import Loader from "../misc/Loader";

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      grabbedData: false,
      results: null,
      userId: null
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  verifyUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      this.setState({ signedIn: false, grabbedData: true });
    } else {
      const request = await axios.post("/api/currentUser", {
        token: localStorage.getItem("token")
      });
      if (request.data === "redirect") {
        this.setState({ signedIn: false, grabbedData: true });
      } else {
        if (request.data[0]) {
          this.setState({
            userId: request.data[0]._id,
            signedIn: false,
            grabbedData: true
          });
          this.getResults();
        } else {
          this.setState({ signedIn: false, grabbedData: true });
        }
      }
    }
  };

  getResults = async () => {
    const results = await axios.get("/api/get/results/" + this.state.userId);
    console.log(results.data);
    this.setState({ results: results.data });
  };

  render() {
    if (!this.state.grabbedData) {
      this.verifyUser();
      return <Loader />;
    }
    return (
      <div>
         <Navbar activePage="Home" signedIn={true} />
        <div className="profile-container">
          <div class="ui card">
            <img
              src="https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg"
              class="ui image"
            />
            <div class="content">
              <div class="header">Jessica</div>
              <div class="meta">Joined in 2019</div>
              <div class="description">Welcome to your account</div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="user icon" />3 Matches
              </a>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div class="ui card">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="ui image"
            />
            <div class="content">
              <div class="header">Jessica</div>
              <div class="meta">Joined in 2019</div>
              <div class="description">Welcome to your account</div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="user icon" />3 Matches
              </a>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div class="ui card">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="ui image"
            />
            <div class="content">
              <div class="header">Jessica</div>
              <div class="meta">Joined in 2019</div>
              <div class="description">Welcome to your account</div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="user icon" />3 Matches
              </a>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div class="ui card">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="ui image"
            />
            <div class="content">
              <div class="header">Jessica</div>
              <div class="meta">Joined in 2019</div>
              <div class="description">Welcome to your account</div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="user icon" />3 Matches
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsPage;
