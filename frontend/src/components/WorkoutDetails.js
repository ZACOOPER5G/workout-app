import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from "../hooks/useAuthContext";

export const WorkoutDetails = ( props ) => {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        const workoutID = props.workout._id

        if (!user) return;
        const response = await fetch(`/api/workouts/${workoutID}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({
                type: 'DELETE_WORKOUT',
                payload: workoutID
            })
            console.log('Workout deleted!', json)
        }
    };

    return (
        <div className="workout-details" >
            <h4>{ props.workout.title }</h4> 
            <p><strong>Load:</strong> <em>{ props.workout.load }KG</em></p>
            <p><strong>Reps:</strong> <em>{ props.workout.reps }</em></p>
            <p>{ formatDistanceToNow(new Date(props.workout.createdAt), { addSuffix: true }) }</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
};