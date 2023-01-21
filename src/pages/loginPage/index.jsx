import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import RegisterForm from "./RegisterForm";

function LoginPage(props) {
    const theme = useTheme();
    const iSNonMobileScreen = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            {/* Header */}
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    Sociopledia
                </Typography>
            </Box>

            {/* Wrap Form  */}
            <Box
                width={iSNonMobileScreen ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to the Sociopledia, the Social Media for Sociopledia
                </Typography>

                {/* Form Controller */}
                <RegisterForm theme={theme} />
            </Box>
        </Box>
    );
}

export default LoginPage;
