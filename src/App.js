import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import GoalList from './components/goals/GoalList';

function App() {  
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      <Typography variant="h3" gutterBottom>
        Daily goals tracker
      </Typography>
      <GoalList />
    </Grid>
  );
}

export default App;
