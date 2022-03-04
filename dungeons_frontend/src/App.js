import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './pages/Home';
import { Project } from './pages/Project';
import { Recipes } from './pages/Recipes';
import { Tales } from './pages/Tales';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/project" component={Project} />
              <Route path="/recipes" component={Recipes} />
              <Route path="/tales" component={Tales} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
