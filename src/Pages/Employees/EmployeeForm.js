import React  from 'react';
import { Grid  } from '@material-ui/core';
import Controls from "../../Components/Controls/Controls.js";

import { UseForm, Form } from "./../../Components/useForm";


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
              </Grid>
              <Grid item xs={6}>
               <Controls.RadioGroup
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}            
               />
              </Grid>
            </Grid>
        </Form>          
    )
}
