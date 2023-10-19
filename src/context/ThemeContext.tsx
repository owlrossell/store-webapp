import {ThemeProvider} from "@mui/material";
import theme from "@/context/theme";

const ThemeContext = ({children}: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContext;