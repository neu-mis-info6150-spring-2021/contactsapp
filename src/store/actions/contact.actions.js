import { ADD_CONTACT } from './type.enum';

export const addContact = (payload) => {
    return { type: ADD_CONTACT, payload }
}