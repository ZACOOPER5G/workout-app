import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dipatch: workoutsDispatch } = useWorkoutsContext();

    const logout = () => {
        // update global state
        dispatch({
            type: "LOGOUT",
        });
        workoutsDispatch({
            type: "SET_WORKOUTS",
            payload: null
        })

        // remove user from local storage
        localStorage.removeItem("user");
    }

    return {logout};
};