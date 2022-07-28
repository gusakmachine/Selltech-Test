import React from "react";


export type Option = {
    id: string | number,
    label: string,
}
export type Props = {
    id?: string,
    label: string,
    multiple?: boolean,
    loading?: boolean,
    errors?: string[],
    value?: Option[],
    options: Option[],
    getOptionDisabled?: (option: Option) => boolean,
    onChange?: (value: Option | Option[] | null) => void,
}
export type OnChangeEntryPoint = (
    event: React.SyntheticEvent, value: Option | Option[] | null
) => void
