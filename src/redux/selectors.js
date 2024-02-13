export function getContacts(state) {
  state.contacts.items;
}

export function getFilter(state) {
  state.filter;
}

// export function getFilteredContacts(state) {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   console.log(filter);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
// }
