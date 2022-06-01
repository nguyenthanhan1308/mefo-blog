import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./../components/Header";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Journey to the end of life</title>
                <link rel="icon" href="/coin.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
