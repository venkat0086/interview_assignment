export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const login =
  ({ username, password }) =>
  (dispatch) => {
    dispatch(loginLoading());
    fetch(`http://localhost:8080/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          alert(res.message);
        } else {
          dispatch(loginSuccess({ username, token: res.token }));
          console.log(res.token);
          alert("Login Success");
        }
      })
      .catch((err) => {
        alert("User not found..!");
        // navigate("/register");
        dispatch(loginFailure());
      });
  };
