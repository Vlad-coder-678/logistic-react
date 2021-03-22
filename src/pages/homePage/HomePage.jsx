import React from "react";
import {
  FirstScreenSection,
  StockAndCounterSection,
  TrustInfoSection,
  SchemeOfWorkSection,
  AppealSection,
} from "./sections";

const HomePage = () => {
  return (
    <div>
      <FirstScreenSection />
      <StockAndCounterSection />
      <TrustInfoSection />
      <SchemeOfWorkSection />
      <AppealSection />
    </div>
  );
};

export default HomePage;
