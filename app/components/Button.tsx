
//export const footerHeight = '200px';
//<TextareaAutosize />

import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function BodyMyApp() {
    const [staffName, setStaffName] = useState("");
    const router = useRouter()

    return (
        <>

            <Box sx={{
                width: '100%',
                textAlign: "center"

            }}>
                {staffName}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: '100%',
                    justifyContent: "center",
                    margin: "0 auto"
                }}>

                <TextField
                    sx={{
                        width: 240,
                        margin: "0 auto"
                    }}
                    placeholder="スタッフ名"
                    onChange={(e) => {
                        setStaffName(e.target.value);
                    }}
                />
                <Button
                    variant="contained"
                    color="warning"
                    sx={{
                        width: 120,
                        margin: "16px auto"
                    }}
                    onClick={() =>
                        router.push('/' + staffName)
                        // router.push('/staffName')
                    }
                >
                    Submit
                </Button>


            </Box >
        </>
    );
};