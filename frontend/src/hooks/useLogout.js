import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const { state, dispatch } = useAuthContext();

    const logout = () => {
        if (state.user) {
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