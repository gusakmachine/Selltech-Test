import React, {FC} from 'react';
import {OnChangeEntryPoint, Props} from "./CustomSelectTypes";
import formatFirstError from "../../utils/formatFirstError";
import {Autocomplete, AutocompleteRenderInputParams, TextField} from "@mui/material";

const CustomSelect:FC<Props> = (props) => {
    const {id, label, multiple, loading, options, errors, value, getOptionDisabled, onChange} = props;
    const errorLabel = formatFirstError(errors, id, label);

    const renderInput = (params: AutocompleteRenderInputParams) => {
        return (
            <TextField
                {...params}
                label={errorLabel? errorLabel : label}
                error={errors?.length !== 0}
                helperText={''}
            />
        );
    }

    const onChangeEntryPoint:OnChangeEntryPoint = (event, value) => {
        onChange?.(value);
    }

    return (
        <Autocomplete
            sx={{width: '100%'}}
            renderInput={renderInput}
            multiple={multiple}
            loading={loading}
            options={options}
            value={multiple? value || [] : (value || null)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionDisabled={getOptionDisabled}
            onChange={onChangeEntryPoint}
        />
    );
};

export default CustomSelect;

