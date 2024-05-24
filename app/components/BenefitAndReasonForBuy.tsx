import { benefits, reasonForBuy } from "../constant";

const BenefitAndReasonForBuy = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full h-full py-6 ">
        <div className="w-full h-full bg-[#EDEDED]  rounded-br-2xl p-4 rounded-tl-2xl">
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
        <div className="w-full h-full bg-[#EDEDED]  rounded-br-2xl p-4 rounded-tl-2xl">
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
    </div>
  );
};

export default BenefitAndReasonForBuy;
