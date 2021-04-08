import AppState from './../state';
import * as ActionType from './../actions/type.enum';

const rootReducer = (state = AppState, action) => {
    let contacts;
    switch(action.type) {
        case ActionType.ADD_CONTACT:
            contacts = [...state.contacts, action.payload];
            break;
        default:
            contacts = state.contacts;
            break;
    }
    return Object.assign({}, state, { contacts });
}

export default rootReducer;