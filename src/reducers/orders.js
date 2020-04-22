export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'ADD_ORDER':
      return [...state, action.order];
    case 'REMOVE_ORDER':
      return [...state.filter((entry) => entry.id !== action.order.id)]
    default:
      return state;
  }
};
