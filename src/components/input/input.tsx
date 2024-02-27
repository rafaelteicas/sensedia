import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

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
            InputProps={{
                endAdornment: LeftIcon,
                ...InputProps,
            }}
            {...textFieldProps}
        />
    );
}
