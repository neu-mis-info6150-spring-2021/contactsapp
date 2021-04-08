import React from 'react';
import { connect } from 'react-redux';

import './NewContact.scss';
import { addContact } from './../../store/actions/contact.actions';

const mapDispatchToProps = (dispatch) => {
    return {
        add: contact => dispatch(addContact(contact))
    }
}
class ConnectedNewContact extends React.Component {

    constructor(props) {
        super(props);
    }

    clickHandler(event) {
        event.preventDefault();
        const name = document.getElementById('name-input').value;
        this.props.add({ name });
    }

    render() {
        return (
            <div>
                <form>
                    <input id="name-input" className="name-input" type="text" name="name"></input>
                    <button className="submit-btn" type="submit" onClick={this.clickHandler.bind(this)}>Add to list</button>
                </form>
            </div>
        );
    }
}
const NewContact = connect(null, mapDispatchToProps)(ConnectedNewContact);

export default NewContact;