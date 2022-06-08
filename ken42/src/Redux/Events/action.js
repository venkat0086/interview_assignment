export const EVENT_SUCCESS = "EVENT_SUCCESS";
export const EVENT_FAILURE = "EVENT_FAILURE";
export const EVENT_LOADING = "EVENT_LOADING";

//action creator

export const eventLoading = () => ({
  type: EVENT_LOADING,
});

export const eventSuccess = (payload) => ({
  type: EVENT_SUCCESS,
  payload,
});

export const eventFailure = () => ({
  type: EVENT_FAILURE,
});
