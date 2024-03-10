const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [...state, { name: action.name, dueDate: action.dueDate }];
    case "DELETE_ITEM":
      return state.filter((item) => item.name !== action.name);
    default:
      return state;
  }
};
export default reducer;
