import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import Goal from './Goal';
import AddGoal from './AddGoal';
import { allGoalsQuery, getData } from '../../firestore';

function GoalList() {

  const [goals, setGoals] = useState([]);
  const [showAddGoalForm, setShowAddGoalForm] = useState(false);
  
  useEffect(()=> {
    getData(allGoalsQuery)
      .then(res => {
        res.forEach(element => {
          addGoal({id: element.id, ...element.data()});          
        });
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


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

  const addGoal = (goal) => {
    console.log(goal);
    let updatedGoals = [...goals];
    updatedGoals.unshift(goal);
    setGoals(updatedGoals);
  }

  const handleAddGoal = () => {
    let negatedShowAddGoalForm = !showAddGoalForm;
    setShowAddGoalForm(negatedShowAddGoalForm);
  }

  const deleteGoal = (id) => {
    let updatedGoals = [...goals].filter(goal => goal.id !== id);
    setGoals(updatedGoals);
  }

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Chip
        icon={<AddIcon />}
        color="secondary"
        label="Add goal"
        aria-label="add goal"
        onClick={handleAddGoal}
        sx={{ mb: 2 }}
      />
      {
        showAddGoalForm ? <AddGoal  addGoal={addGoal} /> : null
      }
      <Grid container spacing={1} >
        <Grid container item spacing={3}>
          {
            goals.map(goal => {
              return (
                <Grid item xs={4} key={goal.id} sx={{ width: '60em'}}>
                  <Goal
                    goal={goal}
                    checkCompleted={checkCompleted}
                    addAndSubstractTriedTimes={addAndSubstractTriedTimes}
                    deleteGoal={deleteGoal}
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
