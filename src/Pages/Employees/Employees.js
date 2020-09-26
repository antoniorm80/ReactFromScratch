import React, { useState } from 'react'
import EmployeeForm from "./EmployeeForm";
import PageHeader from "./../../Layout/PageHeader";
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import UseTable from "../../Components/useTable";
import * as EmployeeService from "../../Services/EmployeeService";
import Controls from "../../Components/Controls/Controls";
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '30%'
    }
}))

const headCells = [
    {id: 'fullName', label:'Employee Name'},
    {id: 'email', label:'Email Address (Personal)'},
    {id: 'mobile', label:'Mobile Number'},
    {id: 'department', label:'Department', disableSorting:true},
]

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(EmployeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

   
    const { 
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
     } = UseTable(records, headCells, filterFn);

     const handleSearch = e => {
         let target = e.target;
         setFilterFn({
             fn: items => {
                 if (target.value === "")
                 return items;
                 else
                 return items.filter(x=> x.fullName.toLowerCase().includes(target.value))
             }
         })
     }

    return (
        <>
            <PageHeader
            title="New Employee"
            subTitle="Form design with validation"
            icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm />   */}
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        onChange={handleSearch}
                        InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    <Search />
                                </InputAdornment>)
                        }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item}>
                                    <TableCell> {item.fullName} </TableCell>
                                    <TableCell> {item.email} </TableCell>
                                    <TableCell> {item.mobile} </TableCell>
                                    <TableCell> {item.department} </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>            
        </>
        
    )
}
