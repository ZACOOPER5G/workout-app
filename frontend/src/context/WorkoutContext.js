import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutsReducer = ( state, action ) => {
    switch (action.type) {
        case 'SET_WORKOUT': {
            return {
                workouts: action.payload
            }
        };
        case 'CREATE_WORKOUT': {
            return {
                workouts: [
                    action.payload, ...state
                ]   
            }
        };
    }
};

export const WorkoutContextProvider = ( props ) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    });

    dispatch({
        type: 'SET_WORKOUTS',
        payload: [{}, {}]
    });

    return (
        <WorkoutContext.Provider value={state} >
            { props.children }
        </WorkoutContext.Provider>
    )
}