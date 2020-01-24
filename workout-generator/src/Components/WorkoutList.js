import React, { useContext, useState } from 'react';
import { Card } from 'semantic-ui-react';
import Workout from './Workout';
import { WorkoutContext } from '../context';


const WorkoutList = () => {
  const workoutContext = useContext(WorkoutContext)
  const { workouts, setCountdown, toggleFavs, favworkouts, replaceWorkout } = workoutContext;
  const [refresh, setRefresh] = useState(false)
  const workoutList = workouts

  return (
    <Card.Group style={{ textAlign: "left", width: "80%"}} itemsPerRow={1}> 
      {workoutList.map(exercise => {
        return (
          <Workout 
            exercise={exercise} 
            key={exercise.Title}
            replaceWorkout={replaceWorkout}
            refresh={() => setRefresh(!refresh)}
            setCountdown={() => setCountdown(parseInt(exercise.Duration) * 1000)}
            toggleFavs={toggleFavs}
            favworkouts={favworkouts}
          />
        )}
      )}
    </Card.Group>
  )
};

export default WorkoutList