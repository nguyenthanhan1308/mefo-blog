import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import {
 MenuIcon
} from "@heroicons/react/outline";
function Header() {
    const [showNavbar, setShowNavbar] = useState(false)
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const setCurrentTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    }
    const navbarToggle = () => {
        setShowNavbar(!showNavbar);
    }

    useEffect(() => {
        setCurrentTheme();
    }, [])

    const renderMobileNavbar =()=>{
        return (
            <>
                <div className={`w-full h-20 md:hidden flex justify-between items-center relative`}>
                    <Link href="/">
                        <img
                            className="w-44 object-contain cursor-pointer"
                            src={
                                theme === "dark"
                                    ? "https://i.ibb.co/q7dJgb7/yellow-logo-removebg-preview.png"
                                    : `https://i.ibb.co/6bLGmkt/logo.png`
                            }
                            alt=""
                        />
                    </Link>
                    <MenuIcon
                        onClick={navbarToggle}
                        className="md:hidden hover:text-green-500 h-6 transition duration-3000 ease-in-out pr-5 cursor-pointer"
                    />
                </div>
                <div
                    className={`${
                        showNavbar ? "absolute opacity-100" : "hidden opacity-0"
                    } dark:bg-yellow-600 text-white md:hidden w-full transition ease-in-out duration-3000 bg-white top-20 z-10 child:cursor-pointer child:p-4 child:transition child:duration-500 child:ease-in-out child:uppercase child:border-t `}
                >
                    <Link href="/about">
                        <div
                            className={`hover:bg-green-500 dark:hover:bg-yellow-500 hover:text-white ${
                                router.asPath === "/about" ? "bg-green-600 dark:bg-yellow-600 text-white" : ""
                            }`}
                        >
                            <h3 className={`pl-6`}>About &rarr;</h3>
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div
                            className={`hover:bg-green-500 dark:hover:bg-yellow-500 hover:text-white ${
                                router.asPath === "/contact" ? "bg-green-600 dark:bg-yellow-600 text-white" : ""
                            }`}
                        >
                            <h3 className={`pl-6`}>Contact &rarr;</h3>
                        </div>
                    </Link>
                    <Link href="/projects">
                        <div
                            className={`hover:bg-green-500 dark:hover:bg-yellow-500 hover:text-white ${
                                router.asPath === "/projects" ? "bg-green-600 dark:bg-yellow-600 text-white" : ""
                            }`}
                        >
                            <h3 className={`pl-6`}>Projects &rarr;</h3>
                        </div>
                    </Link>
                    <Link href="/donations">
                        <div
                            className={`border-b hover:bg-green-500 dark:hover:bg-yellow-500 hover:text-white ${
                                router.asPath === "/projects" ? "bg-green-600 dark:bg-yellow-600 text-white" : ""
                            }`}
                        >
                            <h3 className={`pl-6`}>Donation &rarr;</h3>
                        </div>
                    </Link>
                </div>
            </>
        );
    }
    const renderMD = () => {
        return (
            <div className="hidden md:flex item-center space-x-5">
                <Link href="/">
                    <img
                        className="w-60 md:w-44 object-contain cursor-pointer"
                        src={
                            theme === "dark"
                                ? "https://i.ibb.co/q7dJgb7/yellow-logo-removebg-preview.png"
                                : `https://i.ibb.co/6bLGmkt/logo.png`
                        }
                        alt=""
                    />
                </Link>
                <div
                    className={`w-full hidden md:inline-flex items-center space-x-2 child:cursor-pointer child:flex child:items-center child:justify-center child:p-4 child:transition child:duration-500 child:ease-in-out child:uppercase`}
                >
                    <Link href="/about">
                        <h3
                            className={`ml-10 max-w-[120px] hover:bg-green-500 dark:hover:bg-yellow-500 hover:text-white ${
                                router.asPath === "/about" ? "bg-green-600 dark:bg-yellow-600 text-white" : ""
                            }`}
                        >
                            About
                        </h3>
                    </Link>
                    <Link href="/contact">
                        <h3
                            className={`ml-10 max-w-[120px] hover:bg-green-500 dark:hover:bg-yellow-500 hover:text-white ${
                                router.asPath === "/contact" ? "bg-green-600 dark:bg-yellow-600 text-white" : ""
                            }`}
                        >
                            Contact
                        </h3>
                    </Link>
                    <Link href="/projects">
                        <h3
                            className={`ml-10 max-w-[120px] hover:bg-green-500 dark:hover:bg-yellow-500 hover:text-white ${
                                router.asPath === "/projects" ? "bg-green-600 dark:bg-yellow-600 text-white" : ""
                            }`}
                        >
                            Projects
                        </h3>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <header
            className={`flex flex-col md:flex-row justify-center md:justify-between max-w-7xl mx-auto relative `}
        >
            {renderMobileNavbar()}
            {renderMD()}
            {/* dark mode toggle */}
            <div className="hidden md:flex items-center space-x-5 text-yellow-600 child:cursor-pointer">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        id="yellow-toggle"
                        className="sr-only peer"
                        onChange={setCurrentTheme}
                        checked={theme === "dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
                </label>
            </div>
        </header>
    );
}

export default Header;