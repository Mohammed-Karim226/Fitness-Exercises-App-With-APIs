import {useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import {Box, Typography, Stack} from '@mui/material';
import {fetchData, exerciseOptions} from '../utilities/fetchData';
import Exercisecrad from './ExerciseCard';
const Exercises = ({exercises, setExercises, bodyPart}) => {
const [currentPage, setcurrentPage] = useState(1);

const exercisesPerPage = 4;


  
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

 
const paginate = (event, value)=>{
  setcurrentPage(value);
  window.scrollTo({top:'1800', behavior:'smooth'})
}

useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);

  return (
    <Box
    id="exercises"
    sx={{
      mt:{lg:'120px'},
      mt:'50px',
      p:'20px'
    }}
    >
      <Typography variant='h3' mb="47px">Show Results</Typography>
      <Stack
      direction="row"
      sx={{
        gap:{lg:'110px', xs:'50px'},
      }}
      flexWrap="wrap"
      justifyContent="center"
      >
        {
          currentExercise.map((exercise, index)=>(
            <Exercisecrad exercise={exercise} key={index}/>
          ))
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        <Pagination color="standard" defaultPage={1} shape='rounded' count={Math.ceil(exercises.length / exercisesPerPage)} size='large' page={currentPage} onChange={paginate}>

        </Pagination>
      </Stack>

    </Box>
  )
}

export default Exercises;