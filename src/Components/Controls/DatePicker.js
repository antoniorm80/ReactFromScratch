import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker  } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const convertToDefEventParameter =(name, value) => ({
    target: {
        name,value
    }
})

export default function DatePicker(props) {

    const { name, label, value, onChange } = props
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                formate="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefEventParameter(name, date))}          
            />
        </MuiPickersUtilsProvider>
    )
}

