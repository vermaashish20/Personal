import { Container,Stack, Typography } from '@mui/material'
import React from 'react'

const Skills = () => {
  return (
        <Stack
        sx={{backgroundColor:'grey',paddingX:'110px',paddingY:'50px'}}
        direction='row'
        >
            <Stack direction='column'>
                <Typography fontWeight='bold' variant='h5'>Motivated By The</Typography>
                <Typography fontWeight='bold' variant='h5'>Desire To</Typography>
                <Typography fontWeight='bold' variant='h5'>Achieve</Typography>
            </Stack>
             
        </Stack>
    )
}

export default Skills