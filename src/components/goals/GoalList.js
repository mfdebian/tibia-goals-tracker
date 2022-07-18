import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Goal from './Goal';

function GoalList() {
  
  let someGoals = [
    {
      id: 1,
      name: 'kill elf overseer',
      completed: false,
      triedTimes: 2,
      amount: 2,
      maxAmount: 5,
      triedTimesToday: 0,
    },
    {
      id: 2,
      name: 'killing in the name of task points',
      completed: true,
      triedTimes: 100,
      amount: 100,
      maxAmount: 100,
      triedTimesToday: 0,
    },
    {
      id: 3,
      name: 'tame panther',
      completed: false,
      triedTimes: 2930,
      amount: 0,
      maxAmount: 1,
      triedTimesToday: 0,
    },
  ]

  const [goals, setGoals] = useState(someGoals);

  const checkCompleted = (id) => {
    let updatedGoals = [...goals];
    let goalIndex = updatedGoals.findIndex(goal => goal.id === id);
    let goal = updatedGoals[goalIndex];
    goal.completed = !goal.completed;
    
    setGoals(updatedGoals);
  }

  const addAndSubstractTriedTimes = (id, operation) => {
    let updatedGoals = [...goals];
    let goalIndex = updatedGoals.findIndex(goal => goal.id === id);
    let goal = updatedGoals[goalIndex];
    if(operation === "-") {
      goal.triedTimes-=1;
    } else if(operation === "+") {
      goal.triedTimes+=1;
    } else {
      return
    }

    setGoals(updatedGoals);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid container item spacing={3}>
          {
            goals.map(goal => {
              return (
                <Grid item xs={4} key={goal.id}>
                  <Goal
                    goal={goal} 
                    checkCompleted={checkCompleted} 
                    addAndSubstractTriedTimes={addAndSubstractTriedTimes} 
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </Box>
  )
}

export default GoalList;
