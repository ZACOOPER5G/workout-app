import { useEffect, useState } from "react"

export const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            
            if (response.ok) {
                setWorkouts(json)
            }
        };

        fetchWorkouts()
    }, [])

    console.log(workouts)

    return (
        <div className="home" >
            <div className="workouts" >
                {workouts && workouts.map((workout) => (
                    <div key={workout._id}>
                        <h2>Title: {workout.title}</h2>
                        <h2>Load: {workout.load}</h2>
                    </div>
                ))}
            </div>
        </div>

    )
}
