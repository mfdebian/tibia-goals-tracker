import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

function Goal(props) {
  const { goal, checkCompleted } = props;

  const handleChange = (id) => {
    checkCompleted(id);
  }

  return (
    <>
      <Card variant="outlined">
        <CardContent>
        <Typography variant='body1'>{goal.name}</Typography>
          <CardActions>
            <Checkbox
              checked={goal.completed}
              onChange={() => {handleChange(goal.id)}}
            />
          </CardActions>
          <Typography>{goal.amount}</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Goal;
