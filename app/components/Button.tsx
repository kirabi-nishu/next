
//export const footerHeight = '200px';
//<TextareaAutosize />

import { Box, Button, TextareaAutosize, TextField } from "@mui/material";

export default function BodyMyApp() {
    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: '100%',
                justifyContent: "center",
                margin: "0 auto"
            }}>
            <>
                <TextField
                    sx={{
                        width: 240,
                        margin: "0 auto"
                    }}
                    placeholder="スタッフ名"
                />
                <Button
                    variant="contained"
                    color="warning"
                    sx={{
                        width: 120,
                        margin: "16px auto"
                    }}>
                    Submit
                </Button>
            </>
        </Box >
    );
};