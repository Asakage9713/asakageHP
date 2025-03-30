import Image from "next/image";

export default function TopImage () {
  return (
    <div className="relative w-full h-screen">
      <Image 
        src="/topImage/topImage.png" 
        alt="Top Landing Image" 
        layout="fill" 
        objectFit="cover"
        objectPosition="left top"
        priority
      />
      {/* <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
        Welcome to My Next.js App
      </h1> */}
    </div>
  );
}
