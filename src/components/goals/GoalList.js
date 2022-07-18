import { useState } from 'react';
import Goal from './Goal';

function GoalList() {
  
  let someGoals = [
    {
      id: 1,
      name: 'tame panther',
      completed: false,
      triedTimes: 0,
      amount: 0,
      maxAmount: 1,
      triedTimesToday: 0,
    },
    {
      id: 2,
      name: 'kill elf overseer',
      completed: true,
      triedTimes: 0,
      amount: 2,
      maxAmount: 5,
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

  return (
    <>
      {
        goals.map(goal => {
          return (
            <Goal 
              key={goal.id} 
              goal={goal} 
              checkCompleted={checkCompleted} 
            />
          )
        })
      }
    </>
  )
}

export default GoalList;
