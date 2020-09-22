import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core';


// const Styles =  makeStyles({
//     sideMenu: {
//         display: 'flex',
//         flexDirecition: 'column',
//         position: 'absolute',
//         left: '0px',
//         width: '320px',
//         height : '100%',
//         backgroundColor: '#253053'
//     }
// })

const Styles = {
    sideMenu: {
        display: 'flex',
        flexDirecition: 'column',
        position: 'absolute',
        left: '0px',
        width: '250px',
        height : '100%',
        backgroundColor: '#002884',
    }
}



const Menu = (props) => {
    // const classes = Styles();
    const { classes } = props
    console.log(classes)

    return (
        <div className={classes.sideMenu}>
           
        </div>
    )
}

export default withStyles(Styles)(Menu);