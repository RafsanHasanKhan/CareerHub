import { useState } from "react";
import JobCategoryListCard from "./JobCategoryListCard";


const JobCategoryList = ({
  categories,
  onSelectCategory,
  jobs,
  selectedCategory,
}) => {
  const [visible, setVisible] = useState(4);

  const handleShowMoreItems = () => {
    setVisible(visible => visible + 4);
  };
  const handleShowLessItems = () => {
    if (visible > 5) {
      setVisible(visible => visible - 4);
    }
  };
  return (
    <div className="max-w-[1320px] mx-auto py-16 sm:py-32">
      <div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Job Category List
          </h1>
          <p className="mt-4 mb-8 font-medium px-1">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center flex-wrap  gap-6 ">
            {categories.slice(0, visible).map(category => (
              <JobCategoryListCard
                key={category}
                category={category}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
                jobs={jobs}
              ></JobCategoryListCard>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-6 mt-8">
          <button
            className={`${
              categories.length < visible ? 'hidden' : ''
            } py-2 px-5 border-4 border-[#E8E8E8] rounded-lg`}
            onClick={handleShowMoreItems}
          >
            Load More
          </button>
          <button
            className={`${
              5 > visible ? 'hidden' : ''
            } py-2 px-5 border-4 border-[#E8E8E8] rounded-lg`}
            onClick={handleShowLessItems}
          >
            Load Less
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryList;