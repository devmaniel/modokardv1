import { Button } from "@/components/ui/button";
import Comp_544 from "@/components/comp-544";
import Multiselect_form1 from "@/components/customs/create_flashcard/multiselect_form1";
import Description_input from "./description_input";
import Step_1_title_input from "./step_1_title_input";
import { useState } from "react";

const Step_1_form = () => {
  const [titleLength, setTitleLength] = useState(0); // Will be updated by title input component
  const maxTitleLength = 100;

  return (
    <>
      <form action="#">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
           

            <Comp_544 className="border-2 border-gray-200 rounded-xl border-dashed" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-lg font-light" htmlFor="title">
              Title <span className="text-red-500">*</span>
            </label>
            <Step_1_title_input 
              onTitleChange={(length) => setTitleLength(length)} 
              maxLength={maxTitleLength}
            />
            <div className="flex w-full justify-between text-xs text-gray-500">
              <p>Please make your title longer than 3 words.</p>
              <p className={titleLength >= maxTitleLength ? "text-red-500" : ""}>
                {titleLength} / {maxTitleLength}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-gray-500 text-lg font-light"
              htmlFor="categories"
            >
              Categories <span className="text-red-500">*</span>
            </label>
            <Multiselect_form1 className="border-2 border-grey-200" />
          </div>

          <div className="flex flex-col gap-4">
            <label
              className="text-gray-500 text-lg font-light"
              htmlFor="description"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <Description_input />
          </div>

          <div className="flex gap-5 ">
            <Button variant="destructive" size="lg" className="rounded- w-full"><p className="text-2xl">Cancel</p></Button>
            <Button variant="default" size="lg" className="rounded-  w-full text-2xl">Next</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step_1_form;
