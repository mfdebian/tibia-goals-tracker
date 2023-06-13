import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Switch from '@mui/material/Switch';

function AddTask(props) {
  const { addTask } = props;

  const [dailyTask, setDailyTask] = useState(true);
  const [taskName, setTaskName] = useState("");
  const [taskAmount, setTaskAmount] = useState(0);

  const handleDaily = (event) => {
    setDailyTask(event.target.checked);
  };
  
  const handleName = (event) => {
    setTaskName(event.target.value);
  };

  const handleAmount = (event) => {
    let number = parseInt(event.target.value);
    setTaskAmount(isNaN(number) ? 0 : number);
  };

  const handleSubmit = (event) => {
    let task = {
      id: Date.now(),
      name: taskName,
      daily: dailyTask,
      completed: false,
      currentAmount: 0,
      amount: taskAmount,
      maxAmount: taskAmount,
    }
    addTask(task);
  }

  return (
    <Box sx={{ width: '60em'}}>
      <form>
        Task diario
        <Switch
          checked={dailyTask}
          onChange= {handleDaily}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <div>
          <TextField
            label="task"
            variant="filled"
            sx={{ mb: 2, width:1/2 }}
            onChange={handleName}
            />
        </div>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label="cantidad"
          variant="filled"
          sx={{ width:1/4 }}
          onChange={handleAmount}
        />
        <div>
          <Chip
            icon={<CloudUploadIcon />}
            color="primary"
            label="Add"
            aria-label="submit new task"
            sx={{
              mb: 2,
              mt: 2,
              backgroundColor: '#21b6ae',
              '&:hover': {
              backgroundColor: '#21b6ae',
            }}}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Box>
  )
}

export default AddTask;