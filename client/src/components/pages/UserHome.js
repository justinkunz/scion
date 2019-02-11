import React, { Component } from "react";
import Loader from "../misc/Loader";
import axios from "axios";
import "./UserHome.css";
import Navbar from "../misc/Navbar";

class UserHome extends Component {
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
          this.setState({ userId: request.data[0]._id, signedIn: false });
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
    this.setState({ results: results.data, grabbedData: true });
  };

  render() {
    if (!this.state.grabbedData) {
      this.verifyUser();
      return <Loader />;
    }
    const sizes = ["massive"];

    return (
      <div>
        <Navbar />
        <centered><div className="match-panel">
          <div className="match-generator">
            <h1 className="match-text">Matches</h1>

            {this.state.results.length ? (
              <ul style={{ margin: "0 auto", overflow: "auto" }}>
                {this.state.results.map(connection => {
                  console.log("Connection: ", connection);

                  let emailer = "mailto:" + connection.email;

                  let gradeColor
                if(connection.grade === "A") {
                  gradeColor = "green"
                }
                if(connection.grade === "B") {
                  gradeColor = "blue"
                }
                if(connection.grade === "C") {
                  gradeColor = "yellow"
                }
                if(connection.grade === "D") {
                  gradeColor = "red"
                }
                  return (
                    <li
                      style={{ float: "left", listStyle: "none" }}
                      key={connection.email}
                    >
                      <div
                        className="card m-2"
                        style={{
                          height: "auto",
                          backgroundColor: "rgb(87, 139, 139)"
                        }}
                      >
                      <div 
                        className=" card-image" 
                        style={{
                          height: "100px", 
                          width: "100px", 
                          backgroundColor: gradeColor,
                          clipPath: "circle(50% at 50% 50%)"}}
                        >

                        <h1 className="text-center" style={
                          {
                            fontSize: "450%",
                            fontFamily: "Baloo Bhaijaan, cursive",
                            transform: "translateY(-50%)",
                            position: "relative",
                            top:"50%",
                            color:"white"
                        }
                          }>{connection.grade}</h1>
                        
                      </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h3 className="card-title">
                                {connection.first_name}
                              </h3>

                              <h3 className="card-subtitle">
                                {connection.last_name}
                              </h3>

                              <div className="mt-2">
                                <a href="#" className="btn btn-primary">
                                  Go somewhere
                                </a>

                                <form
                                  className="m-2"
                                  action={emailer}
                                  encType="text/plain"
                                  method="post"
                                  id="email-form"
                                >
                                  <input
                                    type="submit"
                                    id="email"
                                    className="text-bold btn btn-primaary rounded"
                                    value="Email this user"
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <h1>FUCK YOU!!!!!</h1>
            )}
          </div>
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
        </div></centered>
      </div>
    );
  }
}

export default UserHome;
