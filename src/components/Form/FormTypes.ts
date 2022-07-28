import {Option} from "../CustomSelect/CustomSelectTypes";

export type Result = {
    selectCompanyRelation: Option[],
    selectCompanyPosition: Option,
    textInput: string,
    textArea: string,
} | null;