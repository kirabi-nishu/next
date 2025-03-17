import Button from '@mui/material/Button';

export const footerHeight = '200px';

export default function ButtonsMyApp() {
    return (
        <Button variant="text">Text</Button>
        // <Box sx={{ flexGrow: 1, }}>
        //     <AppBar component="footer" position="static" color="default">
        //         <Toolbar variant="dense" disableGutters sx={{ minHeight: footerHeight }}>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
    );
};