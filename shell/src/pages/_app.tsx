import React from "react";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("header/Header"), { ssr: false });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
