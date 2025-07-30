

import Comp_544 from "@/components/comp-544";


const Step_1_form = () => {
  return (
    <>
      <form action="#">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-lg font-light" htmlFor="title">
              Thumbnail <span className="text-red-500">*</span>
            </label>

            <Comp_544  className="border-2 border-gray-200 rounded-xl border-dashed" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-lg font-light" htmlFor="title">
              Title <span className="text-red-500">*</span>
            </label>
            <h1 className="text-4xl font-bold">
              Spring Boot Flashcard Series: Quick & Handy Learning
            </h1>
            <div className="flex w-full justify-between text-xs text-gray-500">
              <p>Please make your title longer than 3 words.</p>
              <p>45 / 100</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label
              className="text-gray-500 text-lg font-light"
              htmlFor="description"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <div className="border w-full h-20 rounded-md"></div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step_1_form;
