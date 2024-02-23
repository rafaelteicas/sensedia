import React from "react";
import { Search } from "@/assets";
import { TextField, TextFieldProps } from "@mui/material";

interface Props extends Omit<TextFieldProps, "variant"> {
    required?: boolean;
    LeftIcon?: React.ReactElement;
}

export function Input({ LeftIcon, ...textFieldProps }: Props) {
    return (
        <TextField
            label="Procurar"
            variant="filled"
            className="z-0 flex flex-1"
            InputProps={{
                endAdornment: LeftIcon,
            }}
            {...textFieldProps}
        />
    );
}
