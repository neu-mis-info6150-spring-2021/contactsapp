import React from 'react';
import './App.scss';
import ContactList from './contact-list/ContactList';
import NewContact from './new-contact/NewContact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    let contacts = ["John", "David"];
    contacts.push(...this.state.contacts);
    this.setState({ contacts });
  }

  componentWillUnmount() {
    let contacts = [];
    this.setState({ contacts });
  }

  addContact(newContact) {
    let contacts = [];
    contacts.push(...this.state.contacts, newContact);
    this.setState({ contacts });
  }

  render() {
    return (
    <div>
      <nav className="brand-bar">
        <h1 className="title">Contacts App</h1>
      </nav>
      <div className="fluid-container">
        <NewContact add={this.addContact.bind(this)}></NewContact>
        <ContactList contacts={this.state.contacts}></ContactList>
      </div>
    </div>
    );
  }
}

export default App;
