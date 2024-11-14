import {
  Hero,
  BlackFridayLifeChanger,
  Header,
  WhyFranchise,
  NumberOfFranchises,
  OurFranchise,
  ButRightNow,
  HowItWork,
  SignForm,
  FranchVideoReviews,
  Footer,
  FeedbackSection,
} from "@/components/index";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <WhyFranchise />
      <BlackFridayLifeChanger />
      <NumberOfFranchises />
      <OurFranchise />
      <ButRightNow />
      <HowItWork />
      <SignForm />
      <FeedbackSection formId="black-form" />
      <FranchVideoReviews />
      <Footer />
    </div>
  );
}
