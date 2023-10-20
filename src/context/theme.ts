'use client';

import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFDE59',
            contrastText: '#3D321F'
        }
    },
    typography: {
        h6: {
            fontWeight: '600',
        },
        fontFamily: '__Montserrat_c73a0c'
    }
})

export default theme;