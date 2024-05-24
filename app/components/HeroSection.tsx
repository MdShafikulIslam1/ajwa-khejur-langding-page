import banner from "@/app/assets/images/demo.jpeg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid gap-8 grid-cols-12 w-full min-h-screen bg-black md:px-20 py-6">
      <div className="col-span-12 md:col-span-6 h-full flex justify-center items-center">
        <div className="relative h-[70vh] md:h-[90vh] w-full ">
          <div className="w-full h-full">
            <Image src={banner} alt="Ajwa_khejur" fill />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 h-full w-full bg-black px-6">
        <div className="h-full w-full flex flex-col justify-center items-center text-white text-3xl text-justify">
          <span className=" font-semibold text-wrap mb-4">
            বহুগুণ সম্পন্ন মদিনার{" "}
          </span>
          <p className="font-medium">
            {" "}
            <span className="text-[#FFB400]"> “আজওয়া VIP খেজুর”</span> রমজানের
            সারাদিনের ক্লান্তি দূর করে শরীরে শক্তি ফিরিয়ে আনে।
          </p>
        </div>
      </div>
      <div className="col-span-12 flex items-center justify-center">
        <button className="flex items-center gap-2 px-6 md:px-24 lg:px-48 text-white bg-[#FFD500] py-2 md:py-6 text-xl md:text-4xl rounded-[46px] font-medium hover:bg-slate-500 hover:drop-shadow-lg  hover:text-[#FFD500] duration-500">
          <span>অর্ডার করতে চাই</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-thumbs-down w-8"
          >
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
