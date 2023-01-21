import { IconButton, InputBase, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "components/wrapBox/FlexBetween";
import { useState } from "react";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";

import LeftBar from "./LeftBar";
import RightBarDesktop from "./RightBarDesktop";
import RightBarMoblie from "./RightBarMoblie";

function Navbar(props) {
    const [isMoblileMenuToggled, setIsMobileMenuToggled] = useState(false); // check menu show mobie
    const isNotMobileSreens = useMediaQuery("(min-width: 1000px)");

    const user = useSelector((state) => state.user); // get state user from redux store
    const fullName = `${user?.firstName} ${user?.lastName}` || "Fake User";

    // Get color them settings ( short values)
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const handleToggleMobileMenu = () => {
        setIsMobileMenuToggled(!isMoblileMenuToggled);
    };
    const propsForChild = {
        fullName,
        theme,
        neutralLight,
        dark,
        background,
        primaryLight,
        alt,
        isNotMobileSreens: isNotMobileSreens,
        handleToggleMobileMenu,
    };
    //const fullName = `${user.firstName} ${user.lastName}` || "fake Name";

    return (
        <FlexBetween padding="1rem 2%" backgroundColor={alt}>
            {/* LeftBar */}
            <LeftBar {...propsForChild} />
            {/* RightBar */}
            {isNotMobileSreens ? (
                // Navbar Desktop
                <RightBarDesktop {...propsForChild} />
            ) : (
                // NavBar mobie
                <>
                    <IconButton onClick={handleToggleMobileMenu}>
                        <MenuIcon />
                    </IconButton>
                    {!isNotMobileSreens && isMoblileMenuToggled && <RightBarMoblie {...propsForChild} />}
                </>
            )}
        </FlexBetween>
    );
}

export default Navbar;
