import './App.css';
import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useState } from 'react';
import { getTexts } from './redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  const texts = useSelector( state => state.texts);
  const [text, setText] = useState('');

  function onChangeText(e) {
    setText(e.target.value);
  }

  function onClickGetTexts() {
    if (!text) {return swal('Error', 'You need to add a text first', 'warning');}

    dispatch(getTexts(text))
    return document.getElementById('inputText').value=''
  }

  return (
    <div className="App">
      <AppBar position="static" className='nav-bar'>
        <Toolbar className='toolbar-style'>
          <TextField 
            id='inputText'
            placeholder='Insert text'
            variant='outlined'
            onChange={onChangeText}
            />
          <Button color="secundary" variant="outlined" onClick={onClickGetTexts} >Send</Button>
        </Toolbar>
      </AppBar>
      <Box maxWidth="sm" className='main-box'>
        <Typography variant='h4'>Results</Typography>
        <br/>
        <Box width={3/4} className='inside-box'>
            {texts.length>0 ? texts.map( item => 
            <Box className='item-box'>
              <Typography variant='h6' >{item}</Typography>
            </Box>
            ): <Typography variant='h5' >There's not any texts to show</Typography>}
        </Box>
      </Box>
    </div>
  );
}

export default App;
