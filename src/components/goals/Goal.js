import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';

function Goal(props) {
  const { goal, checkCompleted, addAndSubstractTriedTimes } = props;

  const handleChange = (id) => {
    checkCompleted(id);
  }

  const handleAddAndSubstract = (id, operation) => {
    addAndSubstractTriedTimes(id, operation);
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{goal.name}</Typography>
        <Divider variant="middle"></Divider>
        <Box>
          <Typography variant="caption">Logrado:</Typography>
          <Checkbox
            checked={goal.completed}
            onChange={() => {handleChange(goal.id)}}
          />
        </Box>
        { goal.maxAmount > 1 ?
            <Box>
              <Typography variant="caption" mr={1}>Cantidad:</Typography>
              <Typography variant="h6" display="inline">{goal.amount}</Typography>
            </Box>
          : null
        }
        <Box>
          <Typography variant="caption" mr={1}>Intentos:</Typography>
          <Fab 
            size="small"
            color="secondary"
            aria-label="add"
            onClick={()=>{handleAddAndSubstract(goal.id, "-")}}
          >
            <RemoveIcon />
          </Fab>
          <Typography variant="h6" margin={1} display="inline">{goal.triedTimes}</Typography>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={()=>{handleAddAndSubstract(goal.id, "+")}}
          >
            <AddIcon />
          </Fab>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Goal;
