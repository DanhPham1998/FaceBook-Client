import HomePage from "pages/homePage";
import LoginPage from "pages/loginPage";
import ProfilePage from "pages/profilePage";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "theme/Theme";

function App() {
    // Set Mode color
    const mode = useSelector((state) => state.mode); // Get from redux store
    // set mode when mode change
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className="App">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/profile/:userId" element={<ProfilePage />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
