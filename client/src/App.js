
import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage, ResultsPage } from './components/pages';
import LoginForm from './components/pages/LogIn';
import SignUpForm from './components/pages/SignUp';
import ipSurvey from './components/pages/surveys/ipSurvey';
import gcSurvey from './components/pages/surveys/gcSurvey';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/ipSurvey" exact component={ipSurvey} />
            <Route path="/gcSurvey" exact component={gcSurvey} />
            <Route path="/results" exact component={ResultsPage} />
            <Route path="/sign_in" exact component={LoginForm} />
            <Route path="/sign_up" exact component={SignUpForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
