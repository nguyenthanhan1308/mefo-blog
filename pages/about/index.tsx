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
                <div className=" box-border trans-item w-[364px]  group-hover:w-[485px] lg:w-[492px] lg:group-hover:w-[656px] xl:w-[640px] xl:group-hover:w-[855px]">
                    <img src="https://i.ibb.co/fGPSnKQ/chill.jpg" alt="chill" />
                </div>
                <div className="trans-item pl-4  text-xl w-[364px] group-hover:w-[240px] lg:w-[492px] lg:group-hover:w-[328px] xl:w-[640px] xl:group-hover:w-[415px] ">
                    A cat.
                </div>
            </div>
            <div className="second-trans">
                <div className="width-trans group transition duration-200 flex justify-center md:h-[204px] lg:h-[276px] xl:h-[360px]">
                    <div className="trans-item pr-4 text-xl text-right w-[364px] group-hover:w-[240px] lg:w-[492px] lg:group-hover:w-[328px] xl:w-[640px] xl:group-hover:w-[415px] ">
                        A games enjoyer.
                    </div>
                    <div className="box-border trans-item w-[364px] group-hover:w-[485px] lg:w-[492px] lg:group-hover:w-[656px] xl:w-[640px] xl:group-hover:w-[855px]">
                        <img className="aspect-video" src="https://i.ibb.co/vYBH3wH/cs-val.webp" alt="chill" />
                    </div>
                </div>
                <div className="second-trans  mx-auto flex justify-between w-full">
                    <div className="habit text-lg shadow shadow-green-600 w-[240px]  lg:w-[330px] xl:w-[410px] ">Gaming</div>
                    <div className="habit text-lg shadow shadow-yellow-600 w-[240px]  lg:w-[330px]  xl:w-[410px] ">Programming</div>
                    <div className="habit text-lg shadow shadow-red-600 w-[240px]  lg:w-[330px] xl:w-[410px]">Eating</div>
                </div>
            </div>
        </div>
    );
}

export default index