import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const setCurrentTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <header className={`flex justify-center md:justify-between p-5 max-w-7xl mx-auto`}>
            <div className="flex item-center space-x-5">
                <Link href="/">
                    <img
                        className="md:w-44 object-contain cursor-pointer"
                        src={
                            theme === "dark"
                                ? "https://i.ibb.co/q7dJgb7/yellow-logo-removebg-preview.png"
                                : `https://i.ibb.co/6bLGmkt/logo.png`
                        }
                        alt=""
                    />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-2 child:cursor-pointer child:flex child:items-center child:justify-center child:p-4 child:transition child:duration-300 child:ease-in-out">
                    <Link href="/about">
                        <h3 className={`hover:bg-green-600 hover:text-white ${router.asPath === '/about' ? 'header-bg':''}`}>About</h3>
                    </Link>
                    <Link href="/contact">
                        <h3 className={`hover:bg-green-600 hover:text-white ${router.asPath === '/contact' ? 'header-bg':''}`}>Contact</h3>
                    </Link>
                        <h3 className={`hover:bg-green-600 hover:text-white ${router.asPath === '/projects' ? 'header-bg':''}`}>Projects</h3>
                </div>
            </div>
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