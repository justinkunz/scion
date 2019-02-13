
import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { HomePage, ResultsPage } from './components/pages';
import LoginForm from './components/pages/LogIn';
import SignUpForm from './components/pages/SignUp';
import GCSurvey from './components/pages/surveys/gcSurvey';
import SignOut from './components/pages/SignOut';
// import SignUpChoose from './components/pages/SignUpChoose';
import IPSurvey from './components/pages/surveys/ipSurvey';
import Loader from './components/misc/Loader';
import Hp2 from './components/pages/Hp2';
import UserHome from './components/pages/UserHome';
import Welcome from './components/pages/Welcome'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
    if (localStorage.getItem("token") !== null)
      this.signInUser(localStorage.getItem("token"));
  }
  componentDidUpdate = () => {
    console.log(this.state);
  };

  signInUser = async token => {
    localStorage.setItem("token", token);
    this.setState({ token: token, loading: true });
    const request = await axios.post("/api/currentUser", {
      token: localStorage.getItem("token")
    });
    console.log(request.data);

    if (request.data[0]) {
      this.setState({ type: request.data[0].user_type, loading: false });
    }
  };

  signOutUser = () => {
    localStorage.removeItem("token");
    this.setState({ token: null });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  signOutUser={this.signOutUser}
                  currentUser={this.state.token}
                />
              )}
            />
            <Route path="/welcome" component={Welcome}/>
            <Route path="/sign_up" component={SignUpForm}/> 
            <Route path="/hp2" exact component={Hp2} />

            <Route path="/results" exact component={ResultsPage} />
            <Route path="/userhome" exact component={UserHome} />
            <Route path="/sign_out" exact render={() => <SignOut signOutUser={this.signOutUser} />} />

            <Route
              path="/sign_out"
              exact
              render={() => <SignOut signOutUser={this.signOutUser} />}
            />
            <Route
              path="/sign_in"
              exact

              render={() => {
                if (this.state.token === null) {
                  return <LoginForm signInUser={this.signInUser} />;
                } else {
                  return (
                    <HomePage
                      signOutUser={this.signOutUser}
                      currentUser={this.state.token}
                    />
                  );
                }
              }}
            />
            <Route
              path="/survey"
              exact
              render={() => {
                if (this.state.loading === true) {
                  return <Loader />;
                }
                if (this.state.type === "IP") {
                  return <IPSurvey />;
                }
                if (this.state.type === "GC") {
                  return <GCSurvey />;
                }
                return <Route path="/" />;
              }}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
