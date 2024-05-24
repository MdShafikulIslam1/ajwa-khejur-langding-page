import { demoData } from "../constant";

const UnhygienicDateKnown = () => {
  return (
    <div className="container">
      <div className="w-full h-full mt-10">
        <div>
          <h1 className="text-4xl text-center mb-8">
            অস্বাস্থ্যকর আজওয়া খেজুর কিভাবে চিনবেন?
          </h1>
        </div>
        <div className="text-xl md:text-2xl space-y-2 w-full h-full">
          {demoData.map((data) => (
            <div className="flex gap-2 items-center " key={data.title}>
              <div className="w-8 h-full">
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
              </div>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnhygienicDateKnown;
