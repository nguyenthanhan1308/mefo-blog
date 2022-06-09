import Image from "next/image";
function index() {
    return (
        <div className="md:max-w-7xl max-w-xl mx-auto relative my-10">
            <Image
                height={1920}
                width={1920}
                loading="lazy"
                className="border border-black"
                src="https://i.ibb.co/6mztxR5/donations.jpg"
                alt="credit"
                useMap="#image-map"
            ></Image>
            <map name="image-map">
                <area
                    target="_blank"
                    alt=""
                    title=""
                    href="https://www.facebook.com/ByoutiEmon"
                    coords="14,16,127,55"
                    shape="rect"
                />
            </map>
            <div className="dark:text-black text-val absolute bottom-[0] inset-x-1/3 lg:bottom-[2%] child:mx-auto">
                <p className="hidden md:inline text-xl lg:text-2xl ">
                    PLEASE DONATE FOR <br /> NEW VALORANT SKINS
                </p>
                <p className="text-xs sm:text-md md:text-xl animate-bounce transition ease-in-out">
                    <span className="text-pink-600">MOMO</span>: 0978699454
                </p>
                <p className="text-xs sm:text-md md:text-xl animate-bounce transition ease-in-out">
                    <span className="text-blue-600">BIDV</span>: 6211000860963
                </p>
                    <img
                        className="h-[80px] w-[80px] xxs:h-[100px] xxs:w-[100px] xl:h-[160px] xl:w-[160px] "
                        src="https://i.ibb.co/qJcvJF6/momo-jpg.png"
                        alt="momo-jpg"
                    />
            </div>
        </div>
    );
}

export default index;