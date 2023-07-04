import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const allContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const delContact = createAction('contacts/delete');
const cleeerFilter = createAction('contacts/clearFilter');
const cFilter = createAction('contacts/changeFilter');

export default { allContact, delContact, cleeerFilter, cFilter };
