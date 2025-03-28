import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


// export type HeaderProps = { // ここを理解できるよう予習する
//     size?: number;
//     color?: string;
//     sx?: SxProps<Theme>;
//     mr?: number; 
// };

export const footerHeight = '200px';

export default function FootersMyApp() {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar component="footer" position="static" >
                <Toolbar variant="dense" disableGutters sx={{ minHeight: footerHeight, margin: "16px auto" }} >
                    footer
                </Toolbar>
            </AppBar>
        </Box>
    );
};