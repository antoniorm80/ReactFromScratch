import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
import Menu from "./Layout/Menu";
import Header from "./Layout/Header";

const Styles = makeStyles({
  appMain: {
    paddingLeft: '250px',
    width: '100%',
    //height: '500px',
    //backgroundColor: "green",
    //marginRight: '50px',
    
  }
})


function App() {
  const classes = Styles();


  return (
    <>
      <Menu/>
      <div className={classes.appMain}> 
          <Header/>
          Este es el contenido donde irán los controles...
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
