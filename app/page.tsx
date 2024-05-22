import banner from "@/app/assets/images/demo.jpeg";
import Image from "next/image";
import { benefits, demoData, reasonForBuy } from "./constant";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* hero section start */}
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
          {/* <button className="w-2/5 md:4/5 text-white bg-[#FFD500] py-4 text-4xl rounded-[46px] font-medium hover:bg-slate-500 hover:drop-shadow-lg  hover:text-[#FFD500] duration-500">
            অর্ডার করতে চাই
          </button> */}
          <button className="flex items-center gap-2 px-12 md:px-32 lg:px-48 text-white bg-[#FFD500] py-4 text-4xl rounded-[46px] font-medium hover:bg-slate-500 hover:drop-shadow-lg  hover:text-[#FFD500] duration-500">
            <span>অর্ডার করতে চাই</span>
            {/* <svg
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
            </svg> */}
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
      <div className="grid gap-8 grid-cols-12 w-full h-full md:px-20 py-6 ">
        <div className="col-span-12 md:col-span-6 h-full bg-[#EDEDED] p-8 rounded-br-2xl  rounded-tl-2xl">
          <div>
            <h1 className="text-center text-xl md:text-2xl">
              আজওয়া VIP খেজুর কেন খাওয়া উচিত?
            </h1>
          </div>
          <div className="w-full h-full">
            {benefits.map(({ title }, index) => (
              <div className="flex gap-3 items-center " key={index}>
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
                  className="lucide lucide-check-check"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
                <p className="mt-2">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 h-full bg-[#EDEDED] p-8 rounded-br-2xl  rounded-tl-2xl">
          <div>
            <h1 className="text-center text-xl md:text-2xl">
              আমাদের থেকে কেন আজওয়া VIP খেজুর ক্রয় করবেন?
            </h1>
          </div>
          <div className="w-full h-full">
            {reasonForBuy.map(({ title }, index) => (
              <div className="flex gap-3 items-center " key={index}>
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
                  className="lucide lucide-check-check"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
                <p className="mt-2">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* why need this product and buy from us end */}
    </main>
  );
}
