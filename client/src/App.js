import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from 'axios';
import './App.css';

import Nav from './components/Nav';
import Bill from './components/Bill';
import Kwh from './components/Kwh';
import Saving from './components/Saving';
import Landing from './components/Landing';

class App extends Component {
  constructor() {
		super();
		this.state = {utils: []};
	}

  componentDidMount() {
    axios.get("/api/utils")
    .then(res => this.setState({utils: res.data}))
  }

  render() {
    return (
      <Router>
        <Container>
          <Nav />
          <div className="div-content">
            <Route path="/" exact={true} component={Landing} />
            <Route path="/bill" exact={true} render={props => <Bill utils={this.state.utils}/>} />
            <Route path="/kwh" exact={true} render={props => <Kwh utils={this.state.utils}/>} />
            <Route path="/saving" exact={true} render={props => <Saving utils={this.state.utils}/>} />
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
