import Image from "next/image";
import discord  from "../../public/discord.png"
function index() {
    return (
        <div className="max-w-7xl mx-auto transition duration-300 p-2">
            <div className="flex flex-col my-5 text-sega">
                <p className="mx-auto text-2xl md:text-4xl">CONTACT</p>
                <hr className="max-w-lg w-full my-5 mx-auto border dark:border-yellow-500 border-green-500" />
            </div>
            <div className="flex flex-col">
                {/* discord */}
                <div
                    key="discord"
                    className={`mb-5 rounded-full shadow shadow-black dark:shadow-white h-24 w-24 mx-auto flex items-center bg-[#5865F2] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item cursor-pointer`}
                >
                    <div className={`ml-[15px] mt-4 object-cover  transition group-hover:animate-shaking`}>
                        <Image
                            placeholder="blur"
                            blurDataURL="/assets/image-placeholder.png"
                            height={64}
                            width={64}
                            src={discord}
                            alt="discord-logo"
                        />
                    </div>
                    <div className="w-full hidden group-hover:flex justify-center">
                        <a href={`https://discord.gg/rJWYVjc`} target="_blank">
                            <b className="text-serif">DISCORD</b>
                        </a>
                    </div>
                </div>
                {/* facebook */}
                <div
                    key="facebook"
                    className={`mb-5 rounded-full shadow shadow-black dark:shadow-white h-24 w-24 mx-auto flex items-center bg-[#3B5998] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item cursor-pointer`}
                >
                    <div
                        className={`ml-[15px] mb-[5px]  w-12 h-14 object-cover transition
                        group-hover:animate-pulse`}
                    >
                        <Image
                            placeholder="blur"
                            blurDataURL="/assets/image-placeholder.png"
                            height={56}
                            width={48}
                            loading="lazy"
                            src={`https://i.ibb.co/TBb671x/facebook-logo.png`}
                            alt="facebook-logo"
                        />
                    </div>
                    <div className="w-full hidden group-hover:flex justify-center">
                        <a href="https://www.facebook.com/meomattroi1308/" target="_blank">
                            <b className="text-serif">FACEBOOK</b>
                        </a>
                    </div>
                </div>
                {/* github */}
                <div
                    key="github"
                    className={`mb-5 rounded-full shadow shadow-black dark:shadow-white h-24 w-24 mx-auto flex items-center bg-black text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item`}
                >
                    <div
                        className={`ml-[15px] w-16 h-16 object-cover transition 
                            group-hover:animate-git`}
                    >
                        <Image
                            placeholder="blur"
                            blurDataURL="/assets/image-placeholder.png"
                            height={64}
                            width={64}
                            src={`https://i.ibb.co/CzT43pS/25231.png`}
                            alt="github-logo"
                        />
                    </div>
                    <div className="w-full hidden group-hover:flex justify-center">
                        <a href="https://github.com/nguyenthanhan1308" target="_blank" className="">
                            <b className="text-serif">GITHUB</b>
                        </a>
                    </div>
                </div>
                {/* gmail */}
                <div
                    key="gmail"
                    className={`mb-5 rounded-full shadow shadow-black dark:shadow-white h-24 w-24 mx-auto flex items-center bg-[#DB4437] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item`}
                >
                    <div
                        className={`ml-[15px] transition
                        group-hover:animate-flip`}
                    >
                        <Image
                            placeholder="blur"
                            blurDataURL="/assets/image-placeholder.png"
                            height={80}
                            width={70}
                            src={`https://i.ibb.co/sV69Yvx/gmail-logo-removebg-preview.png`}
                            alt="gmail-logo"
                        />
                    </div>
                    <div className="w-full hidden group-hover:flex justify-center">
                        <b className="text-serif">sunthanhan1308@gmail.com</b>
                    </div>
                </div>
                {/* phone */}
                <div
                    key="phone"
                    className={`mb-5 rounded-full shadow shadow-black dark:shadow-white h-24 w-24 mx-auto flex items-center bg-[#34c934] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item`}
                >
                    <div
                        className={`ml-[15px] w-16 h-16 object-cover transition
                                group-hover:animate-ringging`}
                    >
                        <Image
                            placeholder="blur"
                            blurDataURL="/assets/image-placeholder.png"
                            height={64}
                            width={64}
                            loading="lazy"
                            src={`https://i.ibb.co/CJgPyWw/phone-call-icon.png`}
                            alt="phone"
                        />
                    </div>
                    <div className="w-full hidden group-hover:flex justify-center">
                        <b className="text-serif">+84 978699454</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index