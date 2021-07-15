import './App.css';
import { AppBar, Box, Button, Container, IconButton, Input, ListItemText, TextField, Toolbar, Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="static" className='nav-bar'>
        <Toolbar className='toolbar-style'>
          <TextField 
            placeholder='Insert text'
            variant='outlined'
            />
          <Button color="secundary" variant="outlined" >Send</Button>
        </Toolbar>
      </AppBar>
      <Box maxWidth="sm" className='main-box'>
        <Typography variant='h3' >Results</Typography>
        <br/>
        <Box width={3/4} className='inside-box'>
            {["Prueba", "Prueba", "Prueba", "Prueba", "Prueba", "Prueba", "Prueba"].map( item => 
            <Box className='item-box'>
              <Typography variant='h6' >{item}</Typography>
            </Box>
            )}
        </Box>
      </Box>
    </div>
  );
}

export default App;
