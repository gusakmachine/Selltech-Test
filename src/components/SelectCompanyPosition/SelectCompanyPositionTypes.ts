import {Option} from "../CustomSelect/CustomSelectTypes";
import {GetPositionsQuery} from "../../graphql/generated";
import {ApolloError} from "@apollo/client";

export type Props = {
    id?: string,
    value?: Option[],
    label: string,
    onChange?: (value: Option | null) => void,
}
export type OnChangeEntryPoint = (value: Option | Option[] | null) => void

export type PositionsDataToOptions = (data: GetPositionsQuery | undefined) => Option[];