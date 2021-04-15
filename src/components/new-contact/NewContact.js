import React from 'react';
import { connect } from 'react-redux';

import './NewContact.scss';
import { addContact } from './../../store/actions/contact.actions';

const mapStoreToProps = (state) => {
    return { size: state.contacts.length }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: contact => dispatch(addContact(contact))
    }
}
class ConnectedNewContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nextId: this.props.size + 1
        }
    }

    clickHandler(event) {
        event.preventDefault();
        const name = document.getElementById('name-input').value;
        const id = this.state.nextId;
        const isEnabled = true;
        this.props.add({ id, name, isEnabled });
        this.setState({
            nextId: id + 1
        })
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
const NewContact = connect(mapStoreToProps, mapDispatchToProps)(ConnectedNewContact);

export default NewContact;