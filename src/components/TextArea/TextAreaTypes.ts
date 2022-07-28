import {ChangeEventHandler} from "react";


export type Props = {
    id?: string,
    value?: string,
    label: string,
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}
