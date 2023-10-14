import { Container,Box,Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import samurai from '../static/R_4.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const About = () => {
  return (
      <Container sx={{marginTop:'50px',}}>
        <Stack
         direction='row'
         spacing={9}
        alignItems='center'
         >
         <Box sx={{width:'300px',height:'200px'}}>
            <img src={samurai} height="100%" width="100%" alt='samurai'></img>
         </Box>
          <Stack direction='column' justifyContent='start' sx={{width:"50%"}}>
              <Typography variant='h4' fontWeight='bold'>About Me</Typography>
              <Typography>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                   It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Typography>
              <Stack direction='row' alignItems='center'>
                  <IconButton><ArrowForwardIcon sx={{color:'purple'}} /></IconButton>
                  <Typography>Read more</Typography>
              </Stack>
          </Stack>
        </Stack>
      </Container>
  )
}

export default About