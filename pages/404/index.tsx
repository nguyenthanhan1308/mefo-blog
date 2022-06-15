import Image from "next/image";

export default function index() {
  return (
      <div className="flex flex-col justify-center items-center ">
          <p className="text-6xl ">404</p>
          <p className="text-4xl leading-[50px]">What are you looking for?</p>
          <Image src="/404.jpg" width={600} height={400} />
      </div>
  );
}
