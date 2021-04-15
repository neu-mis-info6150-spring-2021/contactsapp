import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import ContactList from './contact-list/ContactList';
import NewContact from './new-contact/NewContact';
import Contact from './contact/Contact';
import Home from './home/Home';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (

      <BrowserRouter>
        <nav className="brand-bar">
          <h1 className="title">Contacts App</h1>
        </nav>
        <div className="fluid-container">
          <div>
            <span><Link to="/list">List</Link></span>
            <span>&nbsp;</span>
            <span><Link to="/new">New</Link></span>
          </div>
          <Switch>
            <Route path="/list" render={(props)=>{
              const query = new URLSearchParams(props.location.search);
              return (
                <ContactList query={query} />
              );
            }} />
            <Route path="/new">
              <NewContact />
            </Route>
            <Route path="/contacts/:id"  render={(props)=>(<Contact {...props.match.params} />)} />
            <Route exact path="/" component={Home} />
            <Route path="*">
              <h1>Page not found</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
