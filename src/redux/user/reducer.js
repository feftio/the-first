const initialUserState = {
    id: null,
    username: null,
    token: null,
    authenticated: false,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case "USER/SET_USER_STATE":
            return { ...state, ...action.state };
        case "USER/REGISTER_USER":
            return { ...state };
        case "USER/LOGIN_USER":
            return {
                ...state,
                username: action.username,
                token: action.token,
                authenticated: true,
            };
        case "USER/LOGOUT_USER":
            return {
                ...state,
                ...initialUserState,
            };
        default:
            return state;
    }
};

export default userReducer;
