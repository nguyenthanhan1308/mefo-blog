function index() {
    return (
        <div className="text-sega max-w-7xl mx-auto transition duration-300 p-2 md:min-h-[1440px]">
            {/* title */}
            <div className="flex flex-col mt-5 ">
                <p className="mx-auto text-2xl md:text-4xl">ABOUT ME</p>
                <hr className="max-w-lg w-full my-2 mx-auto border dark:border-yellow-500 border-green-500" />
            </div>
            {/* first image */}
            <div className="flex flex-col mb-2 md:mb-5 ">
                <p className="underline decoration-green-500 underline-offset-4 mx-auto text-lg md:text-3xl">
                    WHO AM I{" "}
                </p>
            </div>
            <div className="width-trans group transition duration-200 flex justify-center md:h-[242px] lg:h-[330px] xl:h-[420px]">
                <div className="box-border trans-item w-[364px] group-hover:w-[485px] lg:w-[492px] lg:group-hover:w-[656px] xl:w-[640px] xl:group-hover:w-[855px]">
                    <img
                        className="dark:shadow-white shadow-lg shadow-black group-hover:hidden transition duration-300"
                        src="https://i.ibb.co/fGPSnKQ/chill.jpg"
                        alt="chill"
                    />
                    <img
                        className="dark:shadow-white shadow-lg shadow-black hidden group-hover:inline transition duration-300"
                        src="https://i.ibb.co/z4z9YX2/halloween.jpg"
                        alt="halloween"
                    />
                </div>
                <div className="relative trans-item pl-4 text-sm md:text-2xl w-[364px] group-hover:w-[240px] lg:w-[492px] lg:group-hover:w-[328px] xl:w-[640px] xl:group-hover:w-[415px] ">
                    <p className="group-hover:opacity-0 transition duration-300 ease-in-out">A cat lover.</p>
                    <p className="group-hover:opacity-100 opacity-0 top-0 absolute transition duration-2000 ease-in-out">
                        A Developer <br /> A Google researcher <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default index;