import React from 'react'
import { Container, ImageList, ImageListItem, Typography } from '@mui/material'


const PhotoGrid = () => {
  return (
    <Container  sx={{marginTop:'50px',paddingX:'150px'}}>
        <Typography fontWeight='bold' variant='h5'>Stunning Projects</Typography>
        <ImageList sx={{width: '100%', height: 800}}  cols={2} >
            {itemData.map((item)=>(
                <ImageListItem key={item.img}>
                    <img
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading='lazy'
                    
                    />
                </ImageListItem>
            ))
        }
        </ImageList>


    </Container>
  )
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
];
export default PhotoGrid