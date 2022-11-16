import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const { user, dispatch } = useAuthContext();

    const logout = () => {
        if (user) {
            // update global state
            dispatch({
                type: "LOGOUT",
            });

            // remove user from local storage
            localStorage.removeItem("user");
        };
    }

    return {logout};
};