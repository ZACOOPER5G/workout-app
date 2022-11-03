
export const WorkoutDetails = ( props ) => {
  return (
    <div>
        <h2>Title: <em>{ props.workout.title }</em></h2> 
        <p><strong>Load:</strong> <em>{ props.workout.load }</em></p>
        <p><strong>Reps:</strong> <em>{ props.workout.reps }</em></p>
        <h6>Posted at { props.workout.createdAt }</h6>
    </div>
  )
};