import React, {FC} from 'react';
import {TextField} from "@mui/material";
import useGetFieldError from "../../hooks/useGetFieldError";
import {Props} from "../TextArea/TextAreaTypes";
import formatFirstError from "../../utils/formatFirstError";

const TextInput:FC<Props> = ({id, value, label, onChange}) => {
    const errors = useGetFieldError(id);
    const errorLabel = formatFirstError(errors, id, label);

    return (
        <TextField
            fullWidth
            label={errorLabel? errorLabel : label}
            error={errors.length !== 0}
            variant="outlined"
            helperText={''}
            value={value || ''}
            onChange={onChange}
        />
    );
};

export default TextInput;