import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlexBetween from "components/wrapBox/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../../redux/index";
import { DarkMode, Help, LightMode, Message, Notifications } from "@mui/icons-material";

function RightBarMoblie({ theme, dark, background, handleToggleMobileMenu }) {
    const dispatch = useDispatch();
    return (
        <Box
            position="fixed"
            right="0"
            bottom="0"
            height="100%"
            maxWidth="500px"
            minWidth="300px"
            backgroundColor={background}
        >
            {/* CLOSE ICON */}
            <Box display="flex" justifyContent="flex-end" p="1rem">
                <IconButton onClick={handleToggleMobileMenu}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Menu Item */}
            <FlexBetween display="flex" flexDirection="column" justifyContent="center" gap="2rem">
                <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: "25px" }}>
                    {theme.palette.mode === "dark" ? (
                        <DarkMode sx={{ fontSize: "25px" }} />
                    ) : (
                        <LightMode sx={{ color: dark, fontSize: "25px" }} />
                    )}
                </IconButton>
                <Message sx={{ fontSize: "25px" }} />
                <Notifications sx={{ fontSize: "25px" }} />
                <Help sx={{ fontSize: "25px" }} />
                <IconButton sx={{ padding: 0 }}>
                    <AccountCircleIcon sx={{ fontSize: "25px" }} style={{ color: dark }} />
                </IconButton>
                {/* <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1673233340356-1e4d405df8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    sx={{ width: 24, height: 24 }}
                /> */}
                <IconButton sx={{ padding: 0 }}>
                    <LogoutIcon sx={{ fontSize: "25px" }} style={{ color: dark }} />
                </IconButton>
            </FlexBetween>
        </Box>
    );
}

export default RightBarMoblie;
