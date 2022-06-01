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
                    <h1 className="text-6xl max-w-xl font-serif">
                        <span className="underline decoration-white decoration-4">MEFO BLOG</span> <br/> is a place where I
                        write things I like.
                    </h1>
                    <h2>I'm a Vietnamese developer who love to play games and explore new things.</h2>
                </div>
                <div className="relative">
                    <img
                        className="hidden md:inline-flex h-32 lg:h-full filter: hue-rotate(180deg)"
                        src="https://i.ibb.co/JBzzpCM/Please-removebg.png"
                        alt=""
                    />
                    <a target="_blank" href="https://www.facebook.com/ByoutiEmon">
                        <img className="absolute top-0 right-0" src="https://i.ibb.co/87YC1BS/credit-removebg-preview.png" alt="credit-removebg-preview"/>
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
                                        {post.description} by {post.author.name}
                                    </p>
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
      description,
      mainImage,
      slug
    }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        },
    };
};
