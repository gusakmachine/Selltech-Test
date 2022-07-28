import React, {FC, useCallback, useMemo} from 'react';
import {useGetRelationsQuery} from "../../graphql/generated";
import useGetFieldError from "../../hooks/useGetFieldError";
import relationsDataToOptions from "./utils/relationsDataToOptions";
import CustomSelect from "../CustomSelect/CustomSelect";
import SelectLoadingError from "../SelectLoadingError/SelectLoadingError";
import {OnChangeEntryPoint, Props} from "./SelectCompanyRelationTypes";

const SelectCompanyRelation:FC<Props> = (props) => {
    const {id, value,label, onChange} = props;
    const {data, loading, error} = useGetRelationsQuery();
    const errors = useGetFieldError(id);
    const options = useMemo(() => relationsDataToOptions(data), [data]);
    const onChangeEntryPoint:OnChangeEntryPoint = useCallback((value) => {
        if (Array.isArray(value)) {
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
            multiple={true}
            loading={loading}
            options={options}
            value={value}
            errors={errors}
            onChange={onChangeEntryPoint}
        />
    );
};

export default SelectCompanyRelation;