import { Stack,Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
      <Stack direction='row' justifyContent='center' alignItems='center'
      sx={{height:'100px',backgroundColor:'gray'}}
      >
          <Typography sx={{color:'white'}}> Made with </Typography>
          <FavoriteIcon sx={{color:'red'}}/>
      </Stack>
  )
}

export default Footer