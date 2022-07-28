import React, {FC} from 'react';
import {Props} from "./SelectLoadingErrorTypes";
import CustomSelect from "../CustomSelect/CustomSelect";

const SelectLoadingError:FC<Props> = ({label}) => {
    return (
        <CustomSelect
            label={`${label} loading error`}
            options={[
                {id: 0, label: 'Loading error. Try refresh the page.'},
            ]}
            getOptionDisabled={(option) => option.id === 0}
            value={[]}
        />
    );
};

export default SelectLoadingError;