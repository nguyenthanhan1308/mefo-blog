import React from 'react'
import Container from './../../components/Container';

function index() {
    return (
        <div className="text-sega max-w-7xl mx-auto transition duration-300 p-2">
            <div className="flex flex-col my-5 ">
                <p className="mx-auto text-4xl">ABOUT ME</p>
                <hr className="max-w-lg w-full my-5 mx-auto border border-green-500" />
            </div>
            <div className="width-trans group transition duration-200 flex justify-center md:h-[242px] lg:h-[330px] xl:h-[420px]">
                <div className="box-border trans-item w-[364px]  group-hover:w-[485px] lg:w-[492px] lg:group-hover:w-[656px] xl:w-[640px] xl:group-hover:w-[855px]">
                    <img
                        className="shadow-lg shadow-black group-hover:hidden transition duration-300"
                        src="https://i.ibb.co/fGPSnKQ/chill.jpg"
                        alt="chill"
                    />
                    <img
                        className="shadow-lg shadow-black hidden group-hover:inline transition duration-300"
                        src="https://i.ibb.co/z4z9YX2/halloween.jpg"
                        alt="halloween"
                    />
                </div>
                <div className="relative trans-item pl-4 text-sm md:text-2xl w-[364px] group-hover:w-[240px] lg:w-[492px] lg:group-hover:w-[328px] xl:w-[640px] xl:group-hover:w-[415px] ">
                    <p className="group-hover:opacity-0 transition duration-2 ease-in-out">A cat lover.</p>
                    <p className="group-hover:opacity-100 opacity-0 top-0 absolute transition duration-2 ease-in-out">
                        A Developer <br /> A Google researcher <br />
                    </p>
                </div>
            </div>
            <div className="second-trans">
                <div className="width-trans group transition duration-200 flex justify-center md:h-[204px] lg:h-[276px] xl:h-[360px]">
                    <div className="relative trans-item pr-4 text-sm md:text-2xl text-right w-[364px] group-hover:w-[240px] lg:w-[492px] lg:group-hover:w-[328px] xl:w-[640px] xl:group-hover:w-[415px] ">
                        <p className="group-hover:opacity-0 transition duration-2 ease-in-out">A games enjoyer.</p>
                        <p className="group-hover:opacity-100 opacity-0 top-0 right-2 absolute transition duration-2 ease-in-out">
                            lol <br />
                            Csgo <br />
                            dota <br />
                            Pokemon <br />
                            Valorant <br />
                            Final Fantasy
                        </p>
                    </div>
                    <div className="box-border trans-item w-[364px] group-hover:w-[485px] lg:w-[492px] lg:group-hover:w-[656px] xl:w-[640px] xl:group-hover:w-[855px]">
                        <img
                            className="aspect-video shadow-lg shadow-black group-hover:hidden transition duration-300"
                            src="https://i.ibb.co/ky65KBf/val-cs.jpg"
                            alt="csval"
                        />
                        <img
                            className="aspect-video shadow-lg shadow-black group-hover:inline hidden transition duration-300"
                            src="https://i.ibb.co/4NNR6VZ/starter.jpg"
                            alt="starter"
                        />
                    </div>
                </div>
                <div className="second-trans mx-auto  w-full mb-40">
                    <hr className="max-w-lg w-full my-5 mx-auto border border-green-500" />
                    <div className="flex justify-between">
                        <div className="habit text-xs md:text-lg shadow shadow-green-600 w-[130px] md:w-[245px] lg:w-[330px] xl:w-[410px] ">
                            Gaming
                        </div>
                        <div className="habit text-xs md:text-lg shadow shadow-yellow-600 w-[130px] md:w-[245px] lg:w-[330px] xl:w-[410px] ">
                            Programming
                        </div>
                        <div className="habit text-xs md:text-lg shadow shadow-red-600 w-[130px] md:w-[245px] lg:w-[330px] xl:w-[410px]">
                            Eating
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index