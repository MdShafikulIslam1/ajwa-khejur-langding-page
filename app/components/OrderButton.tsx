const OrderButton = () => {
  return (
    <div className="col-span-12 flex items-center justify-center my-6">
      <button className="flex items-center gap-2 px-12 md:px-32 lg:px-48 text-white py-4 text-4xl rounded-[46px] font-medium bg-slate-500 hover:bg-slate-900/80 hover:drop-shadow-lg  hover:text-[#FFD500] duration-500">
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
  );
};

export default OrderButton;
