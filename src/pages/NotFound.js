import { useRouteError } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chip from '@mui/material/Chip';


function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <h1>Oops!</h1>
      <p>Sorry, the requested page could not be found.</p>
      <p>
        <Typography variant="caption">
          {error.status} - {error.statusText || error.message}
        </Typography>
      </p>
      <Chip
        icon={<ArrowBackIcon />}
        color="secondary"
        label="Go back"
        aria-label="go back"
        onClick={()=>navigate(-1)}
        sx={{ mb: 2 }}
      />
    </Box>
  )
}

export default NotFound;