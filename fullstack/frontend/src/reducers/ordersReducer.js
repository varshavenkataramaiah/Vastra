const initialState = {
  items: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return {
        ...state,
        items: action.payload || [],
      };
    case 'PLACE_ORDER':
      return {
        ...state,
        items: [action.payload, ...state.items.filter((item) => item.id !== action.payload.id)],
      };
    default:
      return state;
  }
};