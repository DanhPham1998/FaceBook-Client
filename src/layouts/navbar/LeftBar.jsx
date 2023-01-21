import { IconButton, InputBase, Typography } from "@mui/material";
import FlexBetween from "components/wrapBox/FlexBetween";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function LeftBar({ neutralLight, primaryLight, isNotMobileSreens }) {
    const navigate = useNavigate();
    return (
        <FlexBetween gap="1.75rem">
            <Typography
                fontWeight="bold"
                fontSize="clamp(1rem, 2rem, 2.25rem)"
                color="primary"
                onClick={() => navigate("/home")}
                sx={{
                    "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                    },
                }}
            >
                SocialFakeBook
            </Typography>
            {/* Check sreen mobie */}
            {isNotMobileSreens && (
                <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
                    <InputBase placeholder="Search ..." />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </FlexBetween>
            )}
        </FlexBetween>
    );
}

export default LeftBar;
