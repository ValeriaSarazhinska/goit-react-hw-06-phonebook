import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(newContacts) {
        return {
          payload: {
            ...newContacts,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { addContact, deleteContact, filterContacts } =
  contactSlice.actions;
export default contactSlice.reducer;
