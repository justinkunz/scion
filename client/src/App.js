
import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { HomePage, ResultsPage } from './components/pages';
import LoginForm from './components/pages/LogIn';
import SignUpForm from './components/pages/SignUp';
import ipSurvey from './components/pages/surveys/ipSurvey';
import gcSurvey from './components/pages/surveys/gcSurvey';
import GCInfo from './components/pages/surveys/GCInfo';
import SignOut from './components/pages/SignOut';
import SignIn from './components/pages/SignUpChoose';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { token: null }
  }

  signInUser = tokenObj => this.setState({ token: tokenObj });

  signOutUser = () => this.setState({ token: null });

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {


    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact render={() => <HomePage signOutUser={this.signOutUser} currentUser={this.state.token} />} />
            <Route path="/ipSurvey" exact component={ipSurvey} />
            <Route path="/gcSurvey" exact component={gcSurvey} />
            <Route path="/GCInfo" exact component={GCInfo} />
            <Route path="/results" exact component={ResultsPage} />
            <Route path="/sign_up" exact component={SignIn} />
            <Route path="/sign_out" exact render={() => <SignOut signOutUser={this.signOutUser} />} />
            <Route path="/sign_in" exact
              render={() => {
                if (this.state.token === null) {
                  return <LoginForm signInUser={this.signInUser} />
                }
                else {
                  return <HomePage signOutUser={this.signOutUser} currentUser={this.state.token} />
                }
              }} />
            <Route path="/sign_up/ip" exact render={() => <SignUpForm type="IP" />} />
            <Route path="/sign_up/gc" exact render={() => <SignUpForm type="GC" />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
