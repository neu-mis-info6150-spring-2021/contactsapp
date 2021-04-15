import React from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = (state) => {
    return { contacts: state.contacts }
};

class ConnectedContact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const id = Number(this.props.id);
        const contact = this.props.contacts.find(c => c.id === id);
        return (<h1>Hi {contact.name}!</h1>)
    }
}
const Contact = connect(mapStoreToProps)(ConnectedContact);

export default Contact;