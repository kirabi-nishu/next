//サブページ2　hello Nishu
import Image from "next/image";
import styles from "./page.module.css";

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
    <div>
      <h1>hello {params.id}</h1>
    </div>
  );
}
