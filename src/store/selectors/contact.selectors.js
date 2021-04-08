import { createSelector } from 'reselect';

const getAllContacts = state => state.contacts;

export const getEnabledContacts = createSelector(
    getAllContacts,
    contacts => contacts.filter(c => c.isEnabled)
)