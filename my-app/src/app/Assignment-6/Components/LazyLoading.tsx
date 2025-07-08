"use client";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";

const MyLazyHome = dynamic(() => import("./HomePage"), {
  loading: () => <h4>Loading...</h4>,
});
const MyLazyAbout = dynamic(() => import("./AboutPage"), {
  loading: () => <h4>Loading...</h4>,
});

export default function LazyLoading() {
  const [loadhome, setLoadHome] = useState<boolean>(false);
  const [loadAbout, setLoadAbout] = useState<boolean>(false);
  const router = useRouter();

  return (
    <main>
      <h1>Lazy Loading</h1>

      {loadhome && <MyLazyHome />}
      {loadAbout && <MyLazyAbout />}

      <button
        onClick={() => {
          router.push("/Assignment-6/HomePage");
          setLoadHome(true);
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          router.push("/Assignment-6/AboutPage");
          setLoadAbout(true);
        }}
      >
        About
      </button>
    </main>
  );
}
