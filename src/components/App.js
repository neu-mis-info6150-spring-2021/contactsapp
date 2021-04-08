import React from 'react';
import './App.scss';
import ContactList from './contact-list/ContactList';
import NewContact from './new-contact/NewContact';

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
    <div>
      <nav className="brand-bar">
        <h1 className="title">Contacts App</h1>
      </nav>
      <div className="fluid-container">
        <NewContact />
        <ContactList />
      </div>
    </div>
    );
  }
}

export default App;
