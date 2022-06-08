import Link from "next/link"
import { useTheme } from "next-themes";
import { useEffect } from "react";

function Header() {
    const { theme, setTheme } = useTheme();
    useEffect(() =>{
            setTheme("light")
    },[])
    const setCurrentTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    }
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
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" id="green-toggle" className="sr-only peer" onChange={setCurrentTheme}/>
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
                </label>
                {/* <h3>Sign In</h3>
                <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3> */}
            </div>
        </header>
    );
}

export default Header