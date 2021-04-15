import React from 'react';
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom';

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
        const search = this.props.query.get('search');
        const contacts = this.props.contacts
            // Do search if search query parameter available
            .filter(c => !search || (search && c.name === search))
            // Map contacts to Links
            .map((c, i) => {
                const path = `/contacts/${c.id}`;
                return (
                    <li key={i}>
                        <Link to={path}>{c.name}</Link>
                    </li>
                )
            });
        return (
            <ul>
                {contacts}
            </ul>
        );
    }
}
const ContactList = connect(mapStoreToProps)(ConnectedContactList);

export default ContactList;