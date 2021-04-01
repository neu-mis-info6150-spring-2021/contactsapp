import React from 'react';

import './ContactList.scss';

class ContactList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const contacts = this.props.contacts.map((c, i) => <li key={i}>{c}</li>);
        return (
            <ul>
                {contacts}
            </ul>
        );
    }
}

export default ContactList;