import React from "react";
import { StaticHeader, FeedbackForm } from "../index";

const FeedbackSection = ({ formId }: { formId: string }) => {
  return (
    <section id={formId}>
      <div className="container mx-auto px-5 py-8">
        <StaticHeader className="text-center">Форма зворотнього зв&apos;язку</StaticHeader>
        <FeedbackForm />
      </div>
    </section>
  );
};

export default FeedbackSection;
