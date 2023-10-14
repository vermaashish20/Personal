import { Box, Typography } from '@mui/material'
import city from '../static/R_1.png'
const Hero = () => {
  return (
        <Box sx={{width:'100%',height:'95vh',backgroundImage:`url(${city})`, backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
            {/* <img src={city} height="100%" width="100%" alt='samurai'></img> */}
        </Box>

  )
}

export default Hero