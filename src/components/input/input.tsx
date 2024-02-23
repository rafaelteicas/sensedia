import React from "react";
import { InputProps, TextField, TextFieldProps } from "@mui/material";

interface Props extends Omit<TextFieldProps, "variant"> {
    required?: boolean;
    LeftIcon?: React.ReactElement;
}

export function Input({
    LeftIcon,
    value,
    InputProps,
    ...textFieldProps
}: Props) {
    return (
        <TextField
            variant="filled"
            className="z-0"
            InputProps={{
                endAdornment: LeftIcon,
                ...InputProps,
            }}
            {...textFieldProps}
        />
    );
}
