import { Box, Typography, Button } from '@mui/material';
import HearoBannerImg from '../assets/images/b.svg';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', sm: '70px' },
        ml: { sm: '50px' },
        padding: '20px',
        '@media (max-width: 600px)': {
          mt: '40px',
          ml: '20px',
        },
      }}
      position="relative"
    >
      <Typography color="#3C686E" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        color="#9B9B9B"
        sx={{
          fontSize: { lg: '44px', sm: '40px' },
          '@media (max-width: 600px)': {
            fontSize: '32px',
          },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, smile <br /> and Repeat.
      </Typography>
      <Typography
        color="#DF3D2E"
        fontSize="22px"
        lineHeight="1.7"
        mb={3}
        sx={{
          '@media (max-width: 600px)': {
            fontSize: '18px',
          },
        }}
      >
        Check Out The Most Effective Exercises.
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: '.1',
          display: { lg: 'block', sm: 'none', xs: 'none' },
          fontSize: '200px',
        }}
      >
        Exercises
      </Typography>
      <img
        src={HearoBannerImg}
        alt="banner"
        className="hero-banner-img"
        sx={{
          '@media (max-width: 600px)': {
            maxWidth: '80%',
          },
        }}
      />
    </Box>
  );
};

export default HeroBanner;
