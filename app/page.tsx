import BenefitAndReasonForBuy from "./components/BenefitAndReasonForBuy";
import ContactInformation from "./components/ContactInformation";
import HeroSection from "./components/HeroSection";
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
      {/* <OrderButton /> */}
      <TypeWriter />
      <BenefitAndReasonForBuy />

      {/* CONTACT INFORMATION */}
      <ContactInformation />
      {/* FORM  */}
      <OrderForm />
      {/* CONTACT INFORMATION */}
      <div className="mb-8">
        <ContactInformation />
      </div>
    </main>
  );
}
