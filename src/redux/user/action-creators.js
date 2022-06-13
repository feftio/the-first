export const setUserStateAC = (state) => ({
    type: "USER/SET_USER_STATE",
    state,
});

export const loginUserAC = (token, username) => ({
    type: "USER/LOGIN_USER",
    token,
    username,
});

export const registerUserAC = () => ({
    type: "USER/REGISTER_USER",
});

export const logoutUserAC = () => ({
    type: "USER/LOGOUT_USER",
});
