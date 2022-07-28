import React from "react";

export interface TextProps {
    id?: string,
    error?:boolean,
    success?:boolean,
    disabled?:boolean,
    children?: React.ReactNode
};
