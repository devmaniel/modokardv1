import React from "react";
import Stepper from "@/components/comp-519";


import Step_1_form from "./step_1_form";


const Create_own_flashcard_page = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const steps = [
    {
      step: 1,
      title: "Title and Description",
    },
    {
      step: 2,
      title: "Setup Flashcard",
    },
    {
      step: 3,
      title: "Review",
    },
  ];

  return (
    <>
      <div className="mx-auto w-5xl flex flex-col gap-5 mt-10 mb-10">
        <div className="w-full shadow-xl p-4 rounded-md">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        <div className="flex flex-col w-full p-4 shadow-xl rounded-md gap-4">
          <Step_1_form />
        </div>
      </div>
    </>
  );
};

export default Create_own_flashcard_page;
