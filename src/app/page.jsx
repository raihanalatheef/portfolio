import Image from "next/image";

const Homepage = () => {
  return (
  <div className="flex flex-col lg:flex-row h-full lg:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
    <Image src="/raihanaimage.png" fill alt="Raihana image" className="object-contain"/>
    </div>
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center">
      <h1 className="text-4xl md:text-6xl font-bold">Front end developer</h1>
      <p className="md:text-xl">Welcome to my digital canvas</p>
      <div className="flex gap-4">
        <button className="p-4 rounded-lg ring-black ring-1 bg-black text-white">View my work</button>
        <button className="p-4 rounded-lg ring-black ring-1 bg-white text-black">Contact me</button>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
