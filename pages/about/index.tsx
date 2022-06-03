import React from 'react'
import Container from './../../components/Container';

function index() {
    return (
        <div className="max-w-7xl mx-auto  transition duration-300">
            <div className="text-sega flex flex-col my-5 ">
                <p className="mx-auto text-4xl">ABOUT ME</p>
                <hr className="max-w-lg w-full my-5 mx-auto border border-green-500" />
            </div>
            <div className="width-trans group transition duration-200 flex justify-center md:h-[242px] lg:h-[330px] xl:h-[420px]">
                <div className="trans-item w-[364px] group-hover:w-[485px] lg:w-[492px] lg:group-hover:w-[656px] xl:w-[640px] xl:group-hover:w-[855px]">
                    <img src="https://i.ibb.co/fGPSnKQ/chill.jpg" alt="chill" />
                </div>
                <div className="trans-item ml-5 text-xl w-[364px] group-hover:w-[240px] lg:w-[492px] lg:group-hover:w-[328px] xl:w-[640px] xl:group-hover:w-[415px]">
                    A cat who love to wandering around.
                </div>
            </div>
            <div className="second-trans mt-[5px] flex h-[400px]">
                <div className="first habit shadow shadow-green-600  ">Gaming</div>
                <div className="second habit shadow shadow-yellow-600  ">Programming</div>
                <div className="third habit shadow shadow-red-600  ">Eating</div>
            </div>
        </div>
    );
}

export default index