import React, {FC, useCallback, useMemo} from 'react';
import {useGetPositionsQuery} from "../../graphql/generated";
import useGetFieldError from "../../hooks/useGetFieldError";
import positionsDataToOptions from "./utils/positionsDataToOptions";
import CustomSelect from "../CustomSelect/CustomSelect";
import SelectLoadingError from "../SelectLoadingError/SelectLoadingError";
import {OnChangeEntryPoint, Props} from "./SelectCompanyPositionTypes";

const SelectCompanyPosition:FC<Props> = (props) => {
    const {id, value, label, onChange} = props;
    const {data, loading, error} = useGetPositionsQuery();
    const errors = useGetFieldError(id);
    const options = useMemo(() => positionsDataToOptions(data), [data]);
    const onChangeEntryPoint:OnChangeEntryPoint = useCallback((value) => {
        if (!Array.isArray(value)) {
            onChange?.(value);
        }
    }, [onChange]);

    if (error) {
        return <SelectLoadingError label={label}/>;
    }

    return (
        <CustomSelect
            id={id}
            label={label}
            options={options}
            errors={errors}
            value={value}
            onChange={onChangeEntryPoint}
        />
    );
};

export default SelectCompanyPosition;