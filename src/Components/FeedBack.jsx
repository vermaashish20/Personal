import { Stack, Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import bgIMG from '../static/R_1.png'
const FeedBack = () => {

    const bgimg='https://images.unsplash.com/photo-1538032746644-0212e812a9e7'

  return (
    <Stack direction='column' 
    sx={{paddingX:'110px',paddingY:'50px',
        backgroundImage:`url(${bgimg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'400px'
        }}
        alignItems='center'
        justifyContent='center'
    >
        <Typography variant='h5' fontWeight='bold'>Do You Like My Work ?</Typography>
        <Typography>Let's work Together</Typography>
        <Typography>Your Feedback</Typography>
    
    </Stack>
  )
}

export default FeedBack