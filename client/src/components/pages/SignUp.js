import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message
} from "semantic-ui-react";
import SweetAlert from "react-bootstrap-sweetalert";
import Navbar from "../misc/Navbar";
import axios from "axios";
import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      show: false,
      text: "",
      title: "",
      userType: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_pw: "",
      phone_num: "",
      zipcode: "",
      type: "",
      errMsg: "",
      acctCreated: false
    };
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(this.handlePosition)
  }

  handlePosition = position => {

    axios.get("/api/get/zip/" + position.coords.latitude + "/" + position.coords.longitude).then(data => {

      if(data.data === "error"){
        this.setState({errMsg: "Unable to determine your location"})
        return
      }
      this.setState({ zipcode: data.data}) 
    });
  }

  frontEndValidation = () => {
    //missing fields
    if (
      this.state.first_name === "" ||
      this.state.last_name === "" ||
      this.state.email === "" ||
      this.state.phone_num === "" ||
      this.state.confirm_pw === "" ||
      this.state.password === "" ||
      this.state.zipcode === "" ||
      this.state.type === ""
    ) {
      this.setState({
        title: "Yikes!",
        text: "Please fill out all fields!",
        show: true
      });
      return;
    }

    //valid email check
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = re.test(String(this.state.email).toLowerCase());
    if (!isEmail) {
      this.setState({
        title: "Uh oh!",
        text: "Please enter a valid email",
        show: true
      });
      return true;
    }

    //phone number not a number
    if (isNaN(this.state.phone_num)) {
      this.setState({
        title: "Uh oh!",
        text: "Phone number must be numeric",
        show: true
      });
      return true;
    }

    //passwords dont match
    if (this.state.confirm_pw !== this.state.password) {
      this.setState({
        title: "Uh oh!",
        text: "Passwords do not match!",
        show: true
      });
      return true;
    }

    //passwords less than 6 chars
    if (this.state.password.length < 6) {
      this.setState({
        title: "Uh oh!",
        text: "Password must be at least 6 characters long!",
        show: true
      });
      return true;
    }

    return false;
  };

  onLoginClick = () => {
    console.log(this.state)
    if (this.frontEndValidation()) return;

    axios.post("/api/new/user", this.state).then(data => {
      console.log(data);
      console.log(data.data.error);

      if (data.data.error === "Could not sign up user") {
        this.setState({
          title: "Uh oh!",
          text: "An error occured when creating your account",
          show: true
        });
        return;
      }
      if (data.data.error === "existing user") {
        this.setState({
          title: "Your account already exists!",
          text: "Please sign in with your existing information",
          show: true,
          acctCreated: true
        });
        return;
      }
      if (data.status === 200) {
        this.setState({
          title: "Success!",
          text: "Account Successfully Created",
          show: true,
          acctCreated: true
        });
      } else {
        this.setState({
          title: "Uh oh!",
          text: "An error occured when creating your account",
          show: true
        });
      }
    });
  };

  render() {
  
    if (this.state.acctCreated === true && this.state.show === false) {
      return <Redirect to="/sign_in" />;
    }
    return (
      <div className="login-form logInForm">
        <Navbar activePage="signUp" />

        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Sign up for a new account
            </Header>
            <Form size="large">
              <Segment stacked>
                <div className="ui form">
                  <div className="fields">
                    <div className="field">
                      <label>First name</label>
                      <input
                        value={this.state.first_name}
                        type="text"
                        placeholder="First Name"
                        onChange={e =>
                          this.setState({ first_name: e.target.value })
                        }
                      />
                    </div>
                    <div className="field">
                      <label>Last name</label>
                      <input
                        value={this.state.last_name}
                        type="text"
                        placeholder="Last Name"
                        onChange={e =>
                          this.setState({ last_name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="fields">
                    <div className="field">
                      <label>Email Address</label>
                      <input
                        value={this.state.email}
                        type="text"
                        placeholder="example@mail.com"
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                    <div className="field">
                      <label>Phone Number</label>
                      <input
                        value={this.state.phone_num}
                        type="text"
                        placeholder="(123) 456 7890"
                        onChange={e =>
                          this.setState({ phone_num: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="fields">
                    <div className="field">
                      <label>Choose A Password</label>
                      <input
                        value={this.state.password}
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>
                    <div className="field">
                      <label>Confirm Password</label>
                      <input
                        value={this.state.confirm_pw}
                        type="password"
                        placeholder="Confirm Password"
                        onChange={e =>
                          this.setState({ confirm_pw: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="fields" style={{marginBottom: "0"}}>
                    <div className="field">
                      <label>What is your zipcode?</label>
                      <input
                        value={this.state.zipcode}
                        type="text"
                        placeholder="5-digit zipcode"
                        onChange={e =>
                          this.setState({ zipcode: e.target.value })
                        }
                      />
          
                    </div>
                    <div className="field">
                      <label>User Type</label>
                      <select
                        placeholder="Please Select. . ."
                        type="text"
                        onChange={e => e.target.value === "Intended Parent" ? this.setState({type: "IP"}) : this.setState({type: "GC"})}
                      > 
                      
                      <option>Select An Answer. . .</option>
                      <option>Intended Parent</option>
                      <option>Gestational Carrier</option>
                    </select>
                    </div>
                  </div>
        
                 <a href="#" style={{float: "left"}} onClick={() => this.getLocation()} >
                 Use my current location
                 </a>
      
              
                 <div style={{color: "red"}}>{this.state.errMsg}</div>
                </div>
                <br />

                <Button
                  onClick={() => this.onLoginClick()}
                  color="teal"
                  fluid
                  size="large"
                >
                  Sign Up
                </Button>
                <SweetAlert
                  show={this.state.show}
                  title={this.state.title}
                  onConfirm={() => this.setState({ show: false })}
                >
                  <div style={{ maxHeight: "20vh" }}>{this.state.text}</div>
                </SweetAlert>
              </Segment>
            </Form>
            <Message>
                Already have an account? <a href='/sign_in'>Sign In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
