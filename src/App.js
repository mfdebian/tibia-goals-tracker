import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import GoalList from './components/goals/GoalList';

function App() {  
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={2}
    >
      <Typography variant="h6" mb={2}>
        Daily goals tracker
      </Typography>
      <GoalList />
    </Grid>
  );
}

export default App;
