export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_BASKET":
      const deleteItemIndex = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        basket: state.basket
          .slice(0, deleteItemIndex)
          .concat(state.basket.slice(deleteItemIndex + 1)),
      };

    default:
      return state;
  }
};

export default reducer;
