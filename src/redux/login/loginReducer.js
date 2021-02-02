import { READ_MESSAGE } from "./messageTypes";

const initialState = {
  isRead: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_MESSAGE:
      return {
        ...state,
        isRead: !state.isRead,
      };
    default:
      return state;
  }
};

export default messageReducer;
