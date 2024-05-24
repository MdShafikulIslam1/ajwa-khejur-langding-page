"use client";
import TypewriterComponent from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="container my-8 text-xl sm:text-2xl md:text-3xl font-extrabold space-y-5 ">
      <h1 className="text-center">
        (এ খেজুর খেলে রোগ-ব্যাধি থেকে সুস্থতা লাভের দিক-নির্দেশনা দিয়েছেন- )
      </h1>
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent text-center pt-2">
        <TypewriterComponent
          options={{
            strings: ["স্বয়ং বিশ্বনবী মুহাম্মদ (সা.)"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default TypeWriter;
