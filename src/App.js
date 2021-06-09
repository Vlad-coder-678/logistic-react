import React from "react";
import {
  HeaderSection,
  FirstScreenSection,
  ServicesSection,
  AttainmentSection,
  PriceSection,
  TestimonialsSection,
  GallerySection,
  // SchemeOfWorkSection,
  // StockAndCounterSection,
  AppealSection,
} from "./sections";

const App = () => {
  return (
    <div>
      <HeaderSection />
      <main>
        <FirstScreenSection />
        <ServicesSection />
        <AttainmentSection />
        <PriceSection />
        <TestimonialsSection />
        <GallerySection />
        {/* <SchemeOfWorkSection /> */}
        {/* <StockAndCounterSection /> */}
        <AppealSection />
        {/* <FooterSection /> */}
      </main>
    </div>
  );
};

export default App;
