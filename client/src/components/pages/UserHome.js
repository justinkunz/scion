import React, { Component } from "react";
import Loader from "../misc/Loader";
import axios from "axios";
import "./UserHome.css";
import Navbar from "../misc/Navbar";
import { Button, Card } from "semantic-ui-react";
import SweetAlert from "react-bootstrap-sweetalert";
class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: true,
      grabbedData: false,
      results: null,
      userId: null,
      firstName: null,
      lastName: null,
      userDate: null,
      show: false,
      title: null,
      text: null
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
      console.log(request.data);
      if (request.data === "redirect") {
        this.setState({ signedIn: false, grabbedData: true });
      } else {
        if (request.data[0]) {
          this.setState({
            userId: request.data[0]._id,
            signedIn: false,
            firstName: request.data[0].first_name,
            lastName: request.data[0].last_name,
            userDate: request.data[0].created_at
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
    // console.log(results.data);
    this.setState({ results: results.data, grabbedData: true });
    console.log("State check: ", this.state);
  };

  render() {
    console.log(this.state.user_type);
    if (!this.state.grabbedData) {
      this.verifyUser();
      return <Loader />;
    }
    const sizes = ["massive"];
    let formDate = this.state.userDate.substring(0, 10);
    console.log("Form Date: ", formDate);

    const toggleModal = connection => {
      let prevGC;
      if (connection.user_type === "GC") {
        connection.txt_answers.previous_gc === "No"
          ? (prevGC = "Does not have expierence as a gestational carrier")
          : (prevGC = "Does have gestational carrier expierence");

        let hospBC;
        if (
          connection.txt_answers.birthCenter === "No" &&
          connection.txt_answers.hospital === "No"
        ) {
          hospBC = "Is not willing to give birth in a birth center or hospital";
        }
        if (
          connection.txt_answers.birthCenter === "No" &&
          connection.txt_answers.hospital === "Yes"
        ) {
          hospBC =
            "Is willing to give birth in a hospital, but not a birth center";
        }
        if (
          connection.txt_answers.birthCenter === "Yes" &&
          connection.txt_answers.hospital === "No"
        ) {
          hospBC =
            "Is willing to give birth in a birth center, but not a hospital";
        }
        if (
          connection.txt_answers.birthCenter === "Yes" &&
          connection.txt_answers.hospital === "Yes"
        ) {
          hospBC =
            "Is willing to give birth in either a birth center or a hospital";
        }

        let text = (
          <div style={{ textAlign: "left" }}>
            <ul>
              <li>
                Highest Level of Education: {connection.txt_answers.degree_type}{" "}
              </li>
              <li>Religion: {connection.txt_answers.religion} </li>
              <li>{prevGC}</li>
              <li>{hospBC}</li>
              <li>Is {connection.txt_answers.PL_PC}</li>
              <li>
                Is looking for {connection.txt_answers.desiredCompensation}
              </li>
              <li>Goal Timeframe: {connection.txt_answers.implant_timeline}</li>
            </ul>
          </div>
        );

        this.setState({
          title: `${connection.first_name} ${connection.last_name}`,
          text: text,
          show: true
        });
      } else {
        connection.txt_answers.previous_gc === "No"
          ? (prevGC = "Doesn't have a preference on carrier expierence")
          : (prevGC = "Prefers someone with gestational carrier expierence");

        let hospBC;
        if (
          connection.txt_answers.birthCenter === "No" &&
          connection.txt_answers.hospital === "No"
        ) {
          hospBC =
            "Would not like the carrier to give birth in a birth center or hospital";
        }
        if (
          connection.txt_answers.birthCenter === "No" &&
          connection.txt_answers.hospital === "Yes"
        ) {
          hospBC =
            "Would like the carrier to give birth in a hospital, but not a birth center";
        }
        if (
          connection.txt_answers.birthCenter === "Yes" &&
          connection.txt_answers.hospital === "No"
        ) {
          hospBC =
            "Would like the carrier to give birth in a birth center, but not a hospital";
        }
        if (
          connection.txt_answers.birthCenter === "Yes" &&
          connection.txt_answers.hospital === "Yes"
        ) {
          hospBC =
            "Would like the carrier to give birth in either a birth center or a hospital";
        }

        let text = (
          <div style={{ textAlign: "left" }}>
            <ul>
              <li>Degree Preference: {connection.txt_answers.degree_type} </li>
              <li>Religious Preference: {connection.txt_answers.religion} </li>
              <li>{prevGC}</li>
              <li>{hospBC}</li>
              <li>Is {connection.txt_answers.PL_PC}</li>
              <li>
                Is looking to pay {connection.txt_answers.desiredCompensation}
              </li>
              <li>Goal Timeframe: {connection.txt_answers.implant_timeline}</li>
            </ul>
          </div>
        );

        this.setState({
          title: `${connection.first_name} ${connection.last_name}`,
          text: text,
          show: true
        });
      }
    };
    const contactModal = connection => {
      let emailer = "mailto:" + connection.email;
      let text = (
        <div>
          Phone number: {connection.phone_num}
          <br />
          <form
            className="m-2"
            action={emailer}
            encType="text/plain"
            method="post"
            id="email-form"
          >
            <span>Email: </span>
            <Button>{connection.email}</Button>
          </form>
        </div>
      );
      this.setState({
        title: `${connection.first_name} ${connection.last_name}`,
        text: text,
        show: true
      });
    };
    return (
      <div>
        <Navbar activePage="Home" signedIn="true" />
        <div className="match-panel">
          <div
            style={{
              backgroundColor: "lightgrey",
              overflow: "auto",
              height: "450px",
              width: "60%"
            }}
            className="match-generator rounded border border"
          >
          
            <h1 className="match-text">Matches</h1>
            
            {this.state.results.length ? (
              <ul style={{ margin: "0 auto", overflow: "auto" }}>
                {this.state.results.map(connection => {
                  // console.log("Connection: ", connection);

                  let emailer = "mailto:" + connection.email;

                  let gradeColor;
                  if (connection.grade === "A") {
                    gradeColor = "rgb(7,122,42)";
                  }
                  if (connection.grade === "B") {
                    gradeColor = "rgb(7,115,159)";
                  }
                  if (connection.grade === "C") {
                    gradeColor = "rgb(241,200,11)";
                  }
                  if (connection.grade === "D") {
                    gradeColor = "rgb(146,26,28)";
                  }
                  return (
                    <div>
                      <Card style={{ float: "right", margin: "10px" }}>
                        <div
                          className="card-image mt-2"
                          style={{
                            margin: "0 auto",
                            height: "70px",
                            width: "70px",
                            backgroundColor: gradeColor,
                            clipPath: "circle(50% at 50% 50%)"
                          }}
                         >
                          <h1
                            className="text-center"
                            style={{
                              fontSize: "350%",
                              fontFamily: "Baloo Bhaijaan, cursive",
                              transform: "translateY(-50%)",
                              position: "relative",
                              top: "50%",
                              color: "white"
                            }}
                          >
                            {connection.grade}
                          </h1>
                        </div>
                        <Card.Content>
                          <div
                            style={{
                              float: "right",
                              fontSize: "30px",
                              color: gradeColor
                            }}
                          />
                          <Card.Header>{`${connection.first_name} ${
                            connection.last_name
                          }`}</Card.Header>
                          <Card.Meta>Zip Code {connection.zipcode}</Card.Meta>
                          <Card.Description>
                            <ul>
                              <li>{connection.txt_answers.degree_type}</li>
                              <li>{connection.txt_answers.PL_PC}</li>
                              <li>{` Wants ${
                                connection.txt_answers.desiredCompensation
                              }`}</li>
                            </ul>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <div className="ui two buttons">
                            <Button
                              basic
                              color="green"
                              onClick={() => toggleModal(connection)}
                            >
                              More Info
                            </Button>
                            <Button
                              basic
                              color="red"
                              onClick={() => contactModal(connection)}
                            >
                              Contact Info
                            </Button>
                          </div>
                        </Card.Content>
                      </Card>
                      <SweetAlert
                        show={this.state.show}
                        title={this.state.title}
                        onConfirm={() => this.setState({ show: false })}
                        style={{ maxHeight: "50vh", minWidth: "35%" }}
                      >
                        <div style={{ maxHeight: "50vh", minWidth: "35%" }}>
                          {this.state.text}
                        </div>
                      </SweetAlert>
                    </div>
                  );
                })}
              </ul>
            ) : (
              <h1>FUCK YOU!!!!!</h1>
            )}
          </div>
          <div className="col ui card">
            <img
              src="http://4.bp.blogspot.com/-xhztiK_lRX0/VZxwVYQh__I/AAAAAAABARU/MS1Y_FldP8U/s1600/baby-money-1.jpg"
              className="ui image"
            />
            <div className="content">
              <div className="header">
                {this.state.firstName} {this.state.lastName}
              </div>
              <div className="meta">Joined {formDate}</div>
              <div className="description">Welcome to your account</div>
            </div>
            <div className="extra content">
              <a>
                <i aria-hidden="true" className="user icon" />
                {this.state.results.length} Connections
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserHome;
