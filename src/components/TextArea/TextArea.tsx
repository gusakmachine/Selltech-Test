import React, {FC} from 'react';
import {TextField} from "@mui/material";
import {Props} from "./TextAreaTypes";
import useGetFieldError from "../../hooks/useGetFieldError";
import formatFirstError from "../../utils/formatFirstError";

const TextArea:FC<Props> = ({id, value, label, onChange}) => {
    const errors = useGetFieldError(id);
    const errorLabel = formatFirstError(errors, id, label);

    return (
        <TextField
            fullWidth
            multiline
            rows={4}
            label={errorLabel? errorLabel : label}
            error={errors.length !== 0}
            helperText={''}
            value={value || ''}
            onChange={onChange}
        />
    );
};

export default TextArea;