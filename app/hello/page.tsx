//サブページ1　hello world
import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";

export default function Hello() {
  return (
    <>
      <Box sx={{
        width: '100%',
        textAlign: "center"
      }}>
        < h1 > hello world</h1 >
      </Box>
    </>
  );
}
