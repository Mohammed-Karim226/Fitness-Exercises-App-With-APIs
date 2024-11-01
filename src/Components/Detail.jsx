
import {Box, Button, Stack, Typography} from '@mui/material';
import BodyPart from '../assets/icons/body-part.png';
import Equipement from '../assets/icons/equipment.png';
import Target from '../assets/icons/target.png';

const Detail = ({exerciseDetail}) => {
    const {bodyPart, name, target, gifUrl, equipment} = exerciseDetail;
    const extraDetail = [
      {
        icon:BodyPart,
        name:bodyPart
      },
      {
        icon:Target,
        name:target
      },
      {
        icon:Equipement,
        name:equipment
      }
    ]
  return (
    <Stack
    gap="60px"
    sx={{
        flexDirection:{lg:'row'}, p:'20px', alignItems:'center'
    }}
    >
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack
        sx={{
          gap:{lg:'35px', xs:'20px'}
        }}
        >
          <Typography variant='h3' textTransform="capitalize">{name}</Typography>
          <Typography variant='h6' color="#686868">
            Exercises keep you strong. {name} {' '}
            is one of the best exercises to target your {target}
            It will help you improve your{' '}
          <br /> mood and gain energy.

          </Typography>
          {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
        </Stack>
    </Stack>
  )
}

export default Detail;