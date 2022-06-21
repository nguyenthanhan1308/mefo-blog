import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "./typing";
import { useState } from "react";
import Container from './../components/Container';

interface Props {
    posts: [Post];
}
export default function Home({ posts }: Props) {
    const [hideKemon,setHideKemon]=useState(false);
    const stopRunning= () =>{
        setHideKemon(true);
    }
    return (
        <>
            <Container>
                <div className="transition duration-500 ease-in-out flex justify-between items-center dark:bg-yellow-500 bg-green-500 border-y border-black dark:border-white py-10 lg:py-0 text-white">
                    <div className={`running absolute cursor-pointer hidden xl:inline-block group`}>
                        <img
                            className={`rotating ${hideKemon&&`hidden`}`}
                            src="https://i.ibb.co/zHykvNb/running-removebg-preview.png"
                            alt="running-removebg-preview"
                            onClick={stopRunning}
                        />
                    </div>
                    <div className="px-10 space-y-5">
                        <h1 className="max-w-xl font-serif text-2xl md:text-4xl lg:text-6xl ">
                            <span className="underline decoration-white decoration-4 ">MEFO BLOG</span> <br /> is a place
                            where I write about things I like.
                        </h1>
                        <h2 className="">I'm a Vietnamese developer who love to play games and explore new things.</h2>
                    </div>
                    <div className="relative group">
                        <p className="absolute text-4xl hidden group-hover:inline group-hover:animate-bounce top-10 lg:text-6xl lg:top-40 lg:left-10 transition ease-in-out">
                            &darr;
                        </p>
                        <img
                            className="hidden md:inline-flex h-32 lg:h-full "
                            src="https://i.ibb.co/JBzzpCM/Please-removebg.png"
                            alt=""
                            useMap="#image-map"
                        />
                        <map name="image-map">
                            <Link href="/donations">
                                <area
                                    target=""
                                    alt=""
                                    title=""
                                    href=""
                                    coords="24,360,58,430,198,430,163,353,103,273,59,244,32,239,11,253,6,292"
                                    shape="poly"
                                />
                            </Link>
                        </map>
                        <a target="_blank" href="https://www.facebook.com/ByoutiEmon">
                            <img
                                className="absolute lg:top-0 right-0 md:bottom--10 lg:scale-100 md:scale-75"
                                src="https://i.ibb.co/tHcGfjS/kemonlogo-removebg-preview.png"
                                alt="credit-removebg-preview"
                            />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 ">
                    {posts.map(post => (
                        <Link key={post._id} href={`/post/${post.slug.current}`}>
                            <div className="group cursor-pointer rounded-lg border overflow-hidden">
                                <img
                                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                                    src={urlFor(post.mainImage).url()!}
                                    alt=""
                                />
                                <div className="flex justify-between p-5 bg-white ">
                                    <div className="dark:text-black">
                                        <p className="text-lg font-bold">{post.title}</p>
                                        <p className="text-xs">
                                            {post.description} by <span className="dark:text-yellow-600 text-green-600">{post.author.name}</span>
                                        </p>
                                        <div className="flex">
                                            {post.categories.map(category => (
                                                <p className="text-sm my-2 mr-2 p-2 text-white rounded-full dark:bg-yellow-600 bg-green-600 max-w-fit">
                                                    {category.title}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
}

export const getServerSideProps = async () => {
    const query = `*[_type=="post"]{
        _id,
        title,
        author->{
            name,
            image
        },
        categories[]->{
            title
        },
        description,
        mainImage,
        slug,

    }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        },
    };
};
