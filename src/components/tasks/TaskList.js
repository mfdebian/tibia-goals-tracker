import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';
import AddTask from './AddTask';
import { allTasksQuery, getData } from '../../firestore';

function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  
  useEffect(()=> {
    getData(allTasksQuery)
      .then(res => {
        res.forEach(element => {
          addTask({id: element.id, ...element.data()});          
        });
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const addTask = (task) => {
    console.log(task);
    let updatedTasks = [...tasks];
    updatedTasks.unshift(task);
    setTasks(updatedTasks);
  }

  const deleteTask = (id) => {
    let updatedTasks = [...tasks].filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Chip
        icon={<AddIcon />}
        color="secondary"
        label="Add task"
        aria-label="add task"
        onClick={()=> {setShowAddTaskForm(showAddTaskForm => !showAddTaskForm)}}
        sx={{ mb: 2 }}
      />
      {
        showAddTaskForm && <AddTask addTask={addTask} />
      }
      <Grid container spacing={1} >
        <Grid container item spacing={3}>
          {
            tasks.map(task => {
              return (
                <Grid item xs={4} key={task.id} sx={{ width: '60em'}}>
                  <Task
                    task={task}
                    deleteTask={deleteTask}
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

export default Tasklist;
