import React from 'react';
import { createMuiTheme, CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
import Menu from "./Layout/Menu";
import Header from "./Layout/Header";
import PageHeader from "./Layout/PageHeader";
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';


const theme = createMuiTheme({
   palette: {
     primary: {
       main: '#3f51b5',
       light: '#7986cb'
     },
     secondary: {
      main: '#f50057',
      light: '#ff4081'
     },
     background: {
       default: '#f4f5fd'
     }
   },
   shape: {
    borderRadius: '12px'
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


  return (
    <>
      <Menu/>
      <div className={classes.appMain}> 
          <Header/>
          <PageHeader
            title={"Page Header"}
            subTitle={"Page Description"}
            icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
          />
          <br/>
          Este es el contenido donde irán los controles...
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
