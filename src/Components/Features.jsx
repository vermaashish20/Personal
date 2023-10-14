import { Container,Stack, Typography } from '@mui/material'
import React from 'react'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const Features = () => {
  return (
      <Container sx={{marginTop:'50px',paddingX:'150px'}}>
          <Stack
          direction='row'
          justifyContent='space-between'
          spacing={5}
          >
            <Stack direction='column' alignItems='start'>
                <AutoFixHighIcon/>
                <Typography fontWeight='bold'>Modern design</Typography>
                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, repellat sint. 
                    nditiis sit ea?</Typography>
            </Stack>
            <Stack direction='column' alignItems='start'>
                <BeachAccessIcon/>
                <Typography fontWeight='bold'>Modern design</Typography>
                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, repellat sint. 
                    nditiis sit ea?</Typography>
            </Stack>
            <Stack direction='column' alignItems='start'>
                <AutoAwesomeIcon/>
                <Typography fontWeight='bold'>Modern design</Typography>
                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, repellat sint. 
                    nditiis sit ea?</Typography>
            </Stack>

          </Stack>
      </Container>
  )
}

export default Features