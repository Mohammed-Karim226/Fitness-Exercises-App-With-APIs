
import {Box, Stack, Typography} from '@mui/material';
const ExerciseVideos = ({exerciseVideos, name}) => {

  if(!exerciseVideos.length) return 'Load...';
  return (
    <Box
    sx={{
      marginTop:{lg:'200px', xs:'20px'}
    }}
    p='20px'
    >
      <Typography variant='h4' mb="33px" color="#A94719">
        Watch <span style={{color:'#FBBA59', textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
        flexDirection:{lg:'row'},
        gap:{lg:'110px', xs:'0px'}
      }}>
        {
          exerciseVideos?.slice(0, 4).map((item, index)=>(
            <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            >
              <img src={item.video.thumbnails[0].url} />
              <Box>
                <Typography color="#98AD06" variant='h5'>
                  {item.video.title}
                </Typography>
                <Typography color="#01514C" variant='h6'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos;