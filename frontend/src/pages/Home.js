import { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// components
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            const json = await response.json()
            
            if (response.ok) {
                dispatch({
                    type: 'SET_WORKOUTS',
                    payload: json
                })
            }
        };

        if (user) {
            fetchWorkouts()
        };
    }, [dispatch, user]);

    return (
        <div className="home" >
            <TransitionGroup className="workouts">
                        {workouts && workouts.map((workout) => (
                            <CSSTransition  
                            classNames="workout"
                            timeout={50}
                            id={workout._id}
                        >
                                <WorkoutDetails key={workout._id} workout={workout} />
                            </CSSTransition>
                        ))}
            </TransitionGroup>
            <WorkoutForm />
        </div>
    )
}
