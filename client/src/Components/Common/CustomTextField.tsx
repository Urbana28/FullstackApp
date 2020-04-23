import React from 'react';
import {FormHelperText, TextField} from "@material-ui/core";


const CustomTextField = (props: any) => {
    return (
        <div>
            <TextField {...props}/>
            <FormHelperText error />
        </div>
    )
}

export default CustomTextField;