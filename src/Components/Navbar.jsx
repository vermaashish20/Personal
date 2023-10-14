import { AppBar, Button,Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const Navbar = () => {
  return (
    <AppBar color='transparent' elevation='0' >
    <Stack 
    sx={{height:'50px'}}
    direction='row'
    alignItems='center'
    justifyContent='space-between'
    >
        <Typography  variant='h4'>Logo</Typography>
        <Stack 
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        spacing={5}
        >
            <Button  variant='contained'  href='#'>Home</Button>
            <Button  href='#'>About</Button>
            <Button   href='#'>Features</Button>
            <Button   href='#'>Blog</Button>
            <Button   href='#'>Clients</Button>

        </Stack>
        
    </Stack>
    </AppBar>


    )
}

export default Navbar