import Link from "next/link"
import { useEffect, useState } from "react";

function Header() {
    // const [theme, setTheme] = useState("light");
    // useEffect(() => {
    //     const item = localStorage.getItem("mode") ?? "light";
    //     setTheme(item);
    // }, [theme]);
    // const setDarkMode = () =>{
    //     if(theme==="dark"){
    //         localStorage.setItem("mode","light");
    //         return;
    //     }
    //     localStorage.setItem("mode","dark");
    // }
    return (
        <header className={`flex justify-center md:justify-between p-5 max-w-7xl mx-auto`}>
            <div className="flex item-center space-x-5">
                <Link href="/">
                    <img
                        className="md:w-44 object-contain cursor-pointer"
                        src="https://i.ibb.co/6bLGmkt/logo.png"
                        alt=""
                    />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5 child:cursor-pointer">
                    <Link href="/about">
                        <h3>About</h3>
                    </Link>
                    <Link href="/contact">
                        <h3>Contact</h3>
                    </Link>
                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Projects</h3>
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-5 text-green-600 child:cursor-pointer">
                {/* <button className="" onClick={setDarkMode}>
                    Dark
                </button> */}
                {/* <h3>Sign In</h3>
                <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3> */}
            </div>
        </header>
    );
}

export default Header