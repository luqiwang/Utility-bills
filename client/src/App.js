import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import axios from 'axios';
import './App.css';

import Bill from './components/Bill';
import Kwh from './components/Kwh';
import Saving from './components/Saving';

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
          <Link to="/bill"><Button color="success" className="btn-op">See Bill Data</Button></Link>
          <Link to="/kwh"><Button color="success" className="btn-op">See Kwh Data</Button></Link>
          <Link to="/saving"><Button color="success" className="btn-op">See Saving Data</Button></Link>
          <Route path="/bill" exact={true} render={props => <Bill utils={this.state.utils}/>} />
          <Route path="/kwh" exact={true} render={props => <Kwh utils={this.state.utils}/>} />
          <Route path="/saving" exact={true} render={props => <Saving utils={this.state.utils}/>} />
        </Container>
      </Router>
    );
  }
}

export default App;
