import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions, options } from '../utilities/fetchData';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';
const ExerciseDetai = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [target, setTarget] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const exerciseDURL = 'https://exercisedb.p.rapidapi.com';
      const youTubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDURL}/exercises/exercise/${id}`, exerciseOptions);
      setexerciseDetail(exerciseDetailData);

      const fetchYoutubedata = await fetchData(`${youTubeSearchURL}/search?query=${exerciseDetailData.name}`, options);
      setexerciseVideos(fetchYoutubedata.contents);

      const targetMusclesExecisesdata = await fetchData(`${exerciseDURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTarget(targetMusclesExecisesdata);

      const equipmentMusclesExecisesdata = await fetchData(`${exerciseDURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipment(equipmentMusclesExecisesdata);
    }
    fetchExerciseData();
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscle={target} equipmentMuscle={equipment}/>
    </Box>
  )
}

export default ExerciseDetai;