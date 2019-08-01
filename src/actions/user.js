import { createAction } from "redux-actions";

export const logIn = createAction('LOG_IN', provider => ({provider}));

export const handleAuthChange = createAction('HANDLE_AUTH_CHANGE',
    (user, credential) => ({user, credential})
);

export const userAuthenticated = createAction('USER_AUTHENTICATED',
    (user, credential) => ({user, credential})
);

export const logOut = createAction('LOG_OUT');
