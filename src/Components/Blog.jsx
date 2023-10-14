import { ImageList, ImageListItem, ImageListItemBar, Stack,Typography } from '@mui/material'


const Blog = () => {
  return (
    <Stack direction='column'
    sx={{backgroundColor:'brown',paddingX:'110px',paddingY:'50px'}}
    >
        <Typography variant='h5' fontWeight='bold'>Blogs & News.</Typography>

        <ImageList cols={3}gap={20} rowHeight={150} sx={{overflow:'hidden'}}>
            {itemData.map((item)=>(
                <ImageListItem key={item.img}>
                    <img 
                    src={`${item.img}`}              
                    alt={item.title}
                    loading='lazy'
                    />
                    <ImageListItemBar
                    title={item.title}
                    subtitle={item.date}
                    >

                    </ImageListItemBar>
                </ImageListItem>
            ))}
        </ImageList>
    </Stack>
  )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      date:'Dec 23, 2023'
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      date:'Dec 20, 2023'
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      date:'Aug 23, 2020'
    }
  ];
export default Blog