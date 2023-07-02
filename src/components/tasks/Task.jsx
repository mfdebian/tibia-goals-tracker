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

function Task(props) {
  const { deleteTask } = props;

  const [task, setTask] = useState(props.task);

  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5">{task.name}</Typography>
          <DeleteIcon
            color="primary"
            onClick={() => {
              handleDelete(task.id);
            }}
          />
        </Box>
        <Divider variant="middle"></Divider>
        <Box>
          <Typography variant="caption">Logrado:</Typography>
          <Checkbox
            checked={task.completed}
            onChange={() => {
              setTask((task) => ({ ...task, completed: !task.completed }));
            }}
          />
        </Box>
        {task.maxAmount > 1 ? (
          <Box>
            <Typography variant="caption" mr={1}>
              Cantidad:
            </Typography>
            <Typography variant="h6" display="inline">
              {task.amount}
            </Typography>
          </Box>
        ) : null}
        <Box>
          <Typography variant="caption" mr={1}>
            Intentos:
          </Typography>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={() => {
              setTask((task) => ({
                ...task,
                currentAmount: task.currentAmount - 1,
              }));
            }}
          >
            <RemoveIcon />
          </Fab>
          <Typography variant="h6" margin={1} display="inline">
            {task.currentAmount}
          </Typography>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={() => {
              setTask((task) => ({
                ...task,
                currentAmount: task.currentAmount + 1,
              }));
            }}
          >
            <AddIcon />
          </Fab>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Task;
