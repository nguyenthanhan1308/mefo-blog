import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingCat from "../components/LoadingCat";
const MyApp = ({ Component, pageProps }: AppProps, ) => {
    const router = useRouter();
    const [loading,setLoading] =useState(false)
    useEffect(() =>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2800);
    },[router.asPath])
    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>Journey to the horizon of life</title>
                <link rel="icon" href="/coin.ico" />
            </Head>

            {loading ? (
                <LoadingCat />
            ) : (
                <>
                    <Header /> <Component {...pageProps} />
                </>
            )}
        </ThemeProvider>
    );
};

export default MyApp;
