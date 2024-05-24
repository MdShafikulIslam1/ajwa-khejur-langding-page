import BenefitAndReasonForBuy from "./components/BenefitAndReasonForBuy";
import ContactInformation from "./components/ContactInformation";
import HeroSection from "./components/HeroSection";
import OrderButton from "./components/OrderButton";
import OrderForm from "./components/OrderForm";
import TypeWriter from "./components/TypeWriter";
import UnhygienicDateKnown from "./components/UnhygienicDateKnown";

export default function Home() {
  return (
    <main>
      {/* hero section start */}
      <HeroSection />
      {/* how to know unhygienic date start */}
      <UnhygienicDateKnown />
      {/* order button */}
      <div className="my-6">
        <OrderButton />
      </div>
      <TypeWriter />
      <BenefitAndReasonForBuy />

      {/* CONTACT INFORMATION */}
      <ContactInformation />
      {/* FORM  */}
      <div className="container text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-6 text-center">
        <div className="w-full">
          <span className="text-orange-700"> 1 কেজি</span> আজওয়া VIP খেজুরের
          হাদিয়া - <span className="text-orange-700">1800 টাকা</span>
        </div>
      </div>
      <OrderForm />
      {/* CONTACT INFORMATION */}
      <div className="mb-8">
        <ContactInformation />
      </div>
    </main>
  );
}
