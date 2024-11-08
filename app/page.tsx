import {
  Hero,
  BlackFridayLifeChanger,
  Header,
  WhyFranchise,
  NumberOfFranchises,
  // OurFranchise,
  ButRightNow,
  HowItWork,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyFranchise />
      <BlackFridayLifeChanger />
      <NumberOfFranchises />
      {/* <OurFranchise /> */}
      <ButRightNow />
      <HowItWork />
    </>
  );
}
