import React from 'react';

import './NewContact.scss';

class NewContact extends React.Component {

    constructor(props) {
        super(props);
    }

    clickHandler(event) {
        event.preventDefault();
        const newContact = document.getElementById('name-input').value;
        this.props.add(newContact);
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

export default NewContact;