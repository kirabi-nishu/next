"use client"
import { Box, Button, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import PersistentDrawerLeft from "./components/Drawer";
import HeadersMyApp from "./components/Headers";
import FootersMyApp from "./components/Footer";
import ButtonsMyApp from "./components/Button";
import BodyMyApp from "./components/Button";


export default function Home() {
  return (
    <>
      {/* <Box sx={{ height: '120px' }}>
        <HeadersMyApp />

      </Box>

      <Box>
        <PersistentDrawerLeft>
        </PersistentDrawerLeft>
      </Box >

      <Box sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      }}>
        <FootersMyApp />
      </Box> */}

      <Box>
        <BodyMyApp />
      </Box>
    </>
  );
}
