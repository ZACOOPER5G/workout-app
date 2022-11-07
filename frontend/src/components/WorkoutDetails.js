
export const WorkoutDetails = ( props ) => {
  return (
    <div className="workout-details" >
        <h4>{ props.workout.title }</h4> 
        <p><strong>Load:</strong> <em>{ props.workout.load }KG</em></p>
        <p><strong>Reps:</strong> <em>{ props.workout.reps }</em></p>
        <p>Posted at { props.workout.createdAt }</p>
    </div>
  )
};