import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage, Questionaire, ResultsPage } from './components/pages'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/questions" exact component={Questionaire} />
            <Route path="/results" exact component={ResultsPage} />
          </div>
        </BrowserRouter>
      </div >
    );
  };
};

export default App;
