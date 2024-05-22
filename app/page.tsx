import banner from "@/app/assets/images/demo.jpeg";
import Image from "next/image";
import { demoData } from "./constant";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* hero section start */}
      <div className="grid gap-8 grid-cols-12 w-full min-h-screen bg-black md:px-20 py-6">
        <div className="col-span-12 md:col-span-6 h-full flex justify-center items-center">
          <div className="relative h-[70vh] md:h-[90vh] w-full ">
            <Image src={banner} alt="Ajwa_khejur" fill />
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
          <button className="w-2/5 md:4/5 text-white bg-[#FFD500] py-4 text-4xl rounded-[46px] font-medium hover:bg-slate-500 hover:drop-shadow-lg  hover:text-[#FFD500] duration-500">
            অর্ডার করতে চাই
          </button>
        </div>
      </div>
      {/* hero section end */}
      {/* info of ajwa data start */}
      <div className="w-full h-full mt-10">
        <div>
          <h1 className="text-4xl text-center mb-8 px-4">
            অস্বাস্থ্যকর আজওয়া খেজুর কিভাবে চিনবেন?
          </h1>
        </div>
        <div className="text-xl md:text-2xl space-y-2 px-4 md:ps-48 w-full h-full">
          {demoData.map((data) => (
            <div className="flex gap-2 items-center " key={data.title}>
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
                className="lucide lucide-list-checks"
              >
                <path d="m3 17 2 2 4-4" />
                <path d="m3 7 2 2 4-4" />
                <path d="M13 6h8" />
                <path d="M13 12h8" />
                <path d="M13 18h8" />
              </svg>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* info of ajwa data end */}
      {/* why need this product and buy from us start */}
      <div className="grid gap-8 grid-cols-12 w-full  bg-gray-500 md:px-20 py-6">
        <div className="col-span-12 md:col-span-6 h-full ">
          <div className="bg-red-400 rounded-tl-lg rounded-br-lg ">5</div>
        </div>
        <div className="col-span-12 md:col-span-6 h-full">
          why you buy from us
        </div>
      </div>
      {/* why need this product and buy from us end */}
    </main>
  );
}
