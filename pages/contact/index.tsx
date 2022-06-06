import Link from "next/link";
function index() {
    return (
        <div className="md:max-w-7xl max-w-xl mx-auto relative my-10">
            <div className="flex flex-col my-5 ">
                <p className="mx-auto text-2xl md:text-4xl">CONTACT</p>
                <hr className="max-w-lg w-full my-5 mx-auto border border-green-500" />
            </div>
            <div className="flex flex-col">
                {/* discord */}
                <div
                    key="discord"
                    className={`mb-5 rounded-full border h-24 w-24 mx-auto flex items-center bg-[#5865F2] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item cursor-pointer`}
                >
                    <img
                        src={`https://i.ibb.co/sJySCwz/discord-logo-removebg-preview.png`}
                        className={`ml-[15px] mt-2 w-16 h-16 object-cover  transition group-hover:animate-shaking`}
                        alt=""
                    />
                    <div className="w-full hidden group-hover:flex justify-center">
                        <a href={`https://discord.gg/rJWYVjc`}>
                            <b className="text-serif">DISCORD</b>
                        </a>
                    </div>
                </div>
                {/* gmail */}
                <div
                    key="gmail"
                    className={`mb-5 rounded-full border h-24 w-24 mx-auto flex items-center bg-[#DB4437] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item`}
                >
                    <img
                        src={`https://i.ibb.co/sV69Yvx/gmail-logo-removebg-preview.png`}
                        className={`ml-[15px] scale-x-[1.35] scale-y-[1.2] mt-2 w-16 h-16 object-cover transition 
                            group-hover:animate-bounce`}
                        alt=""
                    />
                    <div className="w-full hidden group-hover:flex justify-center">
                        <b className="text-serif">sunthanhan1308@gmail.com</b>
                    </div>
                </div>
                {/* phone */}
                <div
                    key="phone"
                    className={`mb-5 rounded-full border h-24 w-24 mx-auto flex items-center bg-[#34c934] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item`}
                >
                    <img
                        src={`https://i.ibb.co/CJgPyWw/phone-call-icon.png`}
                        className={`ml-[15px] mt-2 w-16 h-16 object-cover transition 
                            group-hover:animate-ringging`}
                        alt=""
                    />
                    <div className="w-full hidden group-hover:flex justify-center">
                        <b className="text-serif">+84 978699454</b>
                    </div>
                </div>
                {/* facebook */}
                <div
                    key="facebook"
                    className={`mb-5 rounded-full border h-24 w-24 mx-auto flex items-center bg-[#3B5998] text-white group hover:w-full hover:justify-start transition duration-300 ease-in-out trans-item cursor-pointer`}
                >
                    <img
                        src={`https://i.ibb.co/TBb671x/facebook-logo.png`}
                        className={`ml-[15px] mt-2 w-16 h-16 object-cover transition 
                            group-hover:animate-pulse`}
                        alt=""
                    />
                    <div className="w-full hidden group-hover:flex justify-center">
                        <a href="https://www.facebook.com/meomattroi1308/" target="_blank">
                            <b className="text-serif">FACEBOOK</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index