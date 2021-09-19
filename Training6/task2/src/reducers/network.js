const initialState = {
  status: false,
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STATUS": {
      return {
        ...state,
        status: !state.status,
      };
    }
    default:
      return state;
  }
};

export default networkReducer;
