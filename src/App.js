import React  from 'react';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import './App.css';
import Menu from "./Layout/Menu";
import Header from "./Layout/Header";
import Employees from './Pages/Employees/Employees';


const theme = createMuiTheme({
  palette: {
    // type:  darkMode ? "dark": "light",
    primary: {
      main: '#3f51b5',
      light: '#bbdefb'
    },
    secondary: {
     main: '#f50057',
     light: '#ff4081'
    },
    background: {
      default: '#e3f2fd'
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)' 
      } 
    }
  },
  props:{
    MuiIconButton: {
      disableRipple: true
    }
  },
  shape: {
   borderRadius: '5px'
  }
})


const Styles = makeStyles({
  appMain: {
    paddingLeft: '250px',
    width: '100%',
  }
})


function App() {
  const classes = Styles();
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <ThemeProvider theme={theme}>
          <Menu />
          <div className={classes.appMain}> 
              <Header/>

              <Employees />
              {/*<FormControlLabel
                control={
                  <Switch 
                    checked={darkMode} 
                    onChange={()=> setDarkMode(!darkMode)} 
                  /> 
                }
                label="Obscuro"
              />  
               <Typography> ESte es un texto</Typography>
              <Button variant="contained">
                  Click me ! 
              </Button> */}
              
          </div>
          <CssBaseline/>
    </ThemeProvider>
      
    </>
  );
}

export default App;
