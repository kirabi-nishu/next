//サブページ2　hello Nishu
import { Box } from "@mui/material";
import PersistentDrawerLeft from "../components/Drawer";
import HeadersMyApp from "../components/Headers";
import FootersMyApp from "../components/Footer";


// export default function Nishu() {
//   return (
//     <h1>hello Nishu</h1>

//   );
// }

// pages/posts/[id].js
// import { useRouter } from 'next/router';

// export default function posts() {
//   const router = useRouter();
//   const { id } = router.query;

//   return <h1>hello {id}</h1>;
// }

type Prop = {
  params: { id: string }
}

export default async function Page({ params }: Prop) {
  const id = params.id
  return (
    <>
      {/* <HeadersMyApp /> */}
      <Box sx={{
        width: '100%',
        textAlign: "center"

      }}>
        < h1 > hello {params.id}</h1 >
      </Box>
      {/* <PersistentDrawerLeft>

      </PersistentDrawerLeft>
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
      </Box> */}
    </>
  );
}
