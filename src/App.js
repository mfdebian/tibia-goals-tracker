import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signOut } from "firebase/auth";
import GoalList from './components/goals/GoalList';

function App() {

  const auth = getAuth();
  let navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      <Box sx={{display: "inline-flex"}}>
        <Typography variant="h3" gutterBottom>
          Goals tracker
        </Typography>
      </Box>
      <GoalList />
      <Fab
        size="small"
        color="secondary"
        aria-label="logout"
        onClick={logout}
        sx={{m:1}}
      >
        <LogoutIcon />
      </Fab>
    </Grid>
  );
}

export default App;
