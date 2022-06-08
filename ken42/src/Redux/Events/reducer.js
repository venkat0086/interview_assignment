import { EVENT_FAILURE, EVENT_LOADING, EVENT_SUCCESS } from "./action";

const initState = {
  loading: true,
  isAuthenticated: false,
  error: false,
};

export const eventReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case EVENT_LOADING:
      return { ...store, loading: true };
    case EVENT_SUCCESS:
      return {
        ...store,
        loading: false,
        isAuthenticated: true,
        error: false,
      };
    case EVENT_FAILURE:
      return {
        ...store,
        loading: false,
        error: true,
      };
    default:
      return store;
  }
};
