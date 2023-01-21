import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";

function PasswordField(props) {
    const { name, label, value, error, helperText, onBlur, onChange } = props;
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(!showPassword);
    return (
        <>
            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id={name}
                    label={label}
                    error={error}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleTogglePassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormHelperText error={error} sx={{ m: "3px 14px 0px" }}>
                {helperText}
            </FormHelperText>
        </>
    );
}

export default PasswordField;
