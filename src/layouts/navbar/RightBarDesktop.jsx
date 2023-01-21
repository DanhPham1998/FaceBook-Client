import { DarkMode, Help, LightMode, Message, Notifications } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import FlexBetween from "components/wrapBox/FlexBetween";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogout, setMode } from "../../redux/index";

function RightBarDesktop({ fullname, theme, dark }) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    // anchorEl null == false
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        // Khi click thì anchorEl(Mỏ neo El) xác định vị trí element được nhận event onClick
        // Để dropdown chuẩn menu vị trí
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <FlexBetween gap="1.4rem">
            <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode === "dark" ? (
                    <DarkMode sx={{ fontSize: "25px" }} />
                ) : (
                    <LightMode sx={{ color: dark, fontSize: "25px" }} />
                )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FlexBetween>
                <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1673233340356-1e4d405df8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    sx={{ width: 24, height: 24 }}
                    onClick={handleClick}
                />
                <Typography pl={1} variant="body1" noWrap>
                    {fullname}
                </Typography>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <MenuItem>My account</MenuItem>
                    <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
                </Menu>
            </FlexBetween>
        </FlexBetween>
    );
}

export default RightBarDesktop;
