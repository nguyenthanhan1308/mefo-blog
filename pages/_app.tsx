import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps, ) => {
    // const [theme, setTheme] = useState("light");
    // useEffect(() => {
    //     const item = localStorage.getItem("mode") ?? "light";
    //     setTheme(item);
    // }, [theme]);
    return (
        <div 
            // className={`${theme === "dark" ? "bg-black" : null}`}
        >
            <Head>
                <title>Journey to the end of life</title>
                <link rel="icon" href="/coin.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
