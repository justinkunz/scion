import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage, ResultsPage } from './components/pages';
import IP_Quest from './components/pages/surveys/IP_Quest';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/ip_questions" exact component={IP_Quest} />
            <Route path="/results" exact component={ResultsPage} />
          </div>
        </BrowserRouter>
      </div >
    );
  };
};

export default App;
