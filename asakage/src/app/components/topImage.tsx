import Image from "next/image";

export default function TopImage () {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-screen xl:min-h-screen">
      <Image 
        className="sm:object-contain md:object-cover lg:object-cover"
        src="/topImage/topImage.png" 
        alt="Top Landing Image" 
        layout="fill" 
        objectFit="cover"
        objectPosition="left top"
        priority
      />
      {/*名前等のコメントを入れたいならここに記載 */}
      {/* <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
        Welcome to My Next.js App
      </h1> */}
    </div>
  );
}
