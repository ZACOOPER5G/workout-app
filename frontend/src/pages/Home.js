import { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// components
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            
            if (response.ok) {
                dispatch({
                    type: 'SET_WORKOUTS',
                    payload: json
                })
            }
        };

        fetchWorkouts()
    }, [dispatch]);

    return (
        <div className="home" >
            <TransitionGroup className="workouts">
                        {workouts && workouts.map((workout) => (
                            <CSSTransition  
                            classNames="workout"
                            timeout={20}
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
