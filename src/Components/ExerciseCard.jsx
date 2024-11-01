import { Link } from "react-router-dom";
import {Button, Stack, Typography} from '@mui/material';
const Exercisecrad = ({exercise}) => {
  return (
   <Link className="exercise-card"  to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction='row'>
      <Button sx={{ml:'21px', color:'#fff', background:'#A75600',
    fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ml:'21px', color:'#fff', background:'#262216',
    fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography
    ml="21px"
    pb="20px"
    mt="11px"
    color="#F24E2B"
    textTransform="capitalize"
    fontWeight="bold"
    >
      {exercise.name}
    </Typography>
   </Link>
  )
}

export default Exercisecrad;