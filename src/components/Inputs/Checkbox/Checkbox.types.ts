import { ChangeEventHandler } from "react";

export interface CheckBoxProps {
    id?: string,
    checked?: boolean,
    label?: string,
    error?:boolean,
    message?:string,
    success?:boolean,
    disabled?:boolean,
    onChange?:ChangeEventHandler<HTMLInputElement>
};
