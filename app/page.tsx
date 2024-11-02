import {
  Hero,
  WhatCompetitorsOffer,
  Header,
  IdeasSuggestions,
  DetailedAnalysis,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhatCompetitorsOffer />
      <IdeasSuggestions />
      <DetailedAnalysis />
    </>
  );
}
