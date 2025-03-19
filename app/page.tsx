"use client"
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import PersistentDrawerLeft from "./components/Drawer";
import HeadersMyApp from "./components/Headers";
import FootersMyApp from "./components/Footer";
import ButtonsMyApp from "./components/Button";



export default function Home() {
  return ( //Header用のBox作って入れてみる
    <>

      {/* <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}> */}
      <Box sx={{ height: '120px' }}>
        <HeadersMyApp />
        {/* < h1 > hello world</h1 > */}
      </Box>

      <Box sx={{ mt: '120px' }}>

        <PersistentDrawerLeft>

        </PersistentDrawerLeft>
      </Box>

      <Box sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        // top: '1000px'
        // position: "absolute",
        // mt: "1000px",   // 上からの距離
        // left: "200px",
      }}>
        <FootersMyApp />
      </Box>
      {/* <Grid item xs={12} sm={6} md={4}> */}
      <Box sx={{
        position: "absolute",
        top: "400px",   // 上からの距離
        left: "200px",
      }}>
      </Box >

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <ButtonsMyApp />
      </Box>
      {/* </Grid>
      </Grid > */}
    </>

    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol>
    //       <li>
    //         Get started by  <code>app/page.tsx</code>.
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className={styles.ctas}>
    //       <a
    //         className={styles.primary}
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className={styles.logo}
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.secondary}
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main >
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a >
    //     <a
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
