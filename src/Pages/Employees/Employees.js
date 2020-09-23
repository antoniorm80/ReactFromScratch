import React from 'react'
import EmployeeForm from "./EmployeeForm";
import PageHeader from "./../../Layout/PageHeader";
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import { makeStyles, Paper } from '@material-ui/core';

const Styles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const clasess = Styles();

    return (
        <>
            <PageHeader
            title="New Employee"
            subTitle="Form design with validation"
            icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
            />
            <Paper className={clasess.pageContent}>
                <EmployeeForm />  
            </Paper>            
        </>
        
    )
}
