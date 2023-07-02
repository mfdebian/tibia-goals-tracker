import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Switch from '@mui/material/Switch';

function AddGoal(props) {
  const { addGoal } = props;

  const [dailyGoal, setDailyGoal] = useState(true);
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState(0);

  const handleDaily = (event) => {
    setDailyGoal(event.target.checked);
  };

  const handleName = (event) => {
    setGoalName(event.target.value);
  };

  const handleAmount = (event) => {
    let number = parseInt(event.target.value);
    setGoalAmount(isNaN(number) ? 0 : number);
  };

  const handleSubmit = (event) => {
    let goal = {
      id: Date.now(),
      name: goalName,
      daily: dailyGoal,
      completed: false,
      currentAmount: 0,
      amount: goalAmount,
      maxAmount: goalAmount,
    };
    addGoal(goal);
  };

  return (
    <Box sx={{ width: '60em' }}>
      <form>
        Goal diario
        <Switch
          checked={dailyGoal}
          onChange={handleDaily}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <div>
          <TextField
            label="goal"
            variant="filled"
            sx={{ mb: 2, width: 1 / 2 }}
            onChange={handleName}
          />
        </div>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label="cantidad"
          variant="filled"
          sx={{ width: 1 / 4 }}
          onChange={handleAmount}
        />
        <div>
          <Chip
            icon={<CloudUploadIcon />}
            color="primary"
            label="Add"
            aria-label="submit new goal"
            sx={{
              mb: 2,
              mt: 2,
              backgroundColor: '#21b6ae',
              '&:hover': {
                backgroundColor: '#21b6ae',
              },
            }}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Box>
  );
}

export default AddGoal;
