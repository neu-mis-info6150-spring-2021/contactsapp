import React from 'react';
import { connect } from 'react-redux';

import './ContactList.scss';
import { getEnabledContacts } from './../../store/selectors/contact.selectors';

const mapStoreToProps = (state) => {
    return { contacts: getEnabledContacts(state) }
};
class ConnectedContactList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const contacts = this.props.contacts.map((c, i) => <li key={i}>{c.name}</li>);
        return (
            <ul>
                {contacts}
            </ul>
        );
    }
}
const ContactList = connect(mapStoreToProps)(ConnectedContactList);

export default ContactList;