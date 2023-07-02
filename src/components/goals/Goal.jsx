import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

function Goal(props) {
  const { deleteGoal } = props;

  const [goal, setGoal] = useState(props.goal);

  const handleDelete = (id) => {
    deleteGoal(id);
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Typography variant="h5">{goal.name}</Typography>
          <DeleteIcon color="primary" onClick={()=>{handleDelete(goal.id)}}/>
        </Box>
        <Divider variant="middle"></Divider>
        <Box>
          <Typography variant="caption">Logrado:</Typography>
          <Checkbox
            checked={goal.completed}
            onChange={() => {setGoal(goal => ({...goal, completed: !goal.completed}))}}
          />
          <Typography variant="caption" mr={1}>Intentos:</Typography>
          <Fab 
            size="small"
            color="secondary"
            aria-label="add"
            onClick={()=>{setGoal(goal => ({...goal, currentAmount: goal.currentAmount - 1}))}}
          >
            <RemoveIcon />
          </Fab>
          <Typography variant="h6" margin={1} display="inline">{goal.currentAmount}</Typography>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={()=>{setGoal(goal => ({...goal, currentAmount: goal.currentAmount + 1}))}}
          >
            <AddIcon />
          </Fab>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Goal;
