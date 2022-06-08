import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps, ) => {
    return (
        <ThemeProvider attribute="class" 
        >
            <Head>
                <title>Journey to the end of life</title>
                <link rel="icon" href="/coin.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
