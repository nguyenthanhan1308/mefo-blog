import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "./typing";

interface Props {
    posts: [Post];
}
export default function Home({ posts }: Props) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center bg-green-500 border-y border-black py-10 lg:py-0 text-white">
                <div className="px-10 space-y-5">
                    <h1 className="max-w-xl font-serif text-2xl md:text-4xl lg:text-6xl ">
                        <span className="underline decoration-white decoration-4 ">MEFO BLOG</span> <br /> is a place
                        where I write things I like.
                    </h1>
                    <h2 className="">I'm a Vietnamese developer who love to play games and explore new things.</h2>
                </div>
                <div className="relative">
                    <img
                        className="hidden md:inline-flex h-32 lg:h-full filter: hue-rotate(180deg)"
                        src="https://i.ibb.co/JBzzpCM/Please-removebg.png"
                        alt=""
                    />
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
                                <div>
                                    <p className="text-lg font-bold">{post.title}</p>
                                    <p className="text-xs">
                                        {post.description} by <span className="text-green-">{post.author.name}</span>
                                    </p>
                                    {post.categories.map(category=>(<p className="text-sm my-2 p-2 text-white rounded-full bg-green-600 max-w-fit">{category.title}</p>))}
                                </div>
                                <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
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
