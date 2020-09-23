import React  from 'react';
import { Grid  } from '@material-ui/core';
import Controls from "../../Components/Controls/Controls.js";
import { UseForm, Form } from "./../../Components/useForm";
import * as EmployeeService from "../../Services/EmployeeService";


const genderItems = [
    { id: 'male', title: 'Male'},
    { id: 'female', title: 'Female'},
    { id: 'other', title: 'Other'},
]

const initialFormValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId:'',
    hireDate: new Date(),
    isPermanent: false,

}

export default function EmployeeForm() {
  
    const {
        values, 
        handleInputChange
    } = UseForm(initialFormValues);

   

    return (
        <Form>
            <Grid container>
              <Grid item xs={6}>
                  <Controls.Input
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                  />                  
                  <Controls.Input
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                  />
                   <Controls.Input
                    label="Mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleInputChange}
                  />
                   <Controls.Input
                    label="City"
                    name="city"
                    value={values.city}
                    onChange={handleInputChange}
                  />
              </Grid>
              <Grid item xs={6}>
               <Controls.RadioGroup
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}            
               />
               <Controls.Select 
                    name="departmentId"
                    label="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={EmployeeService.getDepartmentCollection()}
                /> 
                <Controls.DatePicker 
                    name="hireDate"
                    label="Hire Date"
                    value={values.hireDate}
                    onChange={handleInputChange}
                />
                <Controls.Checkbox 
                    name="isPermanent"
                    label="Permanent Employee"
                    value={values.isPermanent}
                    onChange={handleInputChange}
                />
                <div>
                    <Controls.Button
                     type="submit" 
                     text="Submit"
                    />
                    <Controls.Button
                     text="Reset"
                     color="default"
                    />
                </div>
              </Grid>
            </Grid>
        </Form>          
    )
}
