import { TextField } from "@mui/material";

function InputField(props) {
    const { name, label, value, error, helperText, onBlur, onChange } = props;
    return (
        <TextField
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            error={error}
            helperText={helperText}
            margin="normal"
            variant="outlined"
            fullWidth
        />
    );
}

export default InputField;
