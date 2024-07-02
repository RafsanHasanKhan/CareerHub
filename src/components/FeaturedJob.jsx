import { useState } from 'react';
import FeaturedJobCard from './FeaturedJobCard';
const FeaturedJob = ({ jobs }) => {
  const [visible, setVisible] = useState(6);

  const handleShowMoreItems = () => {
    setVisible(visible => visible + 6);

  };
  const handleShowLessItems = () => {
    if (visible > 7) {
      setVisible(visible => visible - 6);
    }
  };

  return (
    <div id='jobApply' className="max-w-[1320px] mx-auto pb-16 sm:pb-32">
      <div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Featured Jobs</h1>
          <p className="mt-4 mb-8 font-medium mx-1">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="mt-8 grid gap-6 grid-cols-1 xl:grid-cols-2 justify-center">
            {jobs.slice(0, visible).map(newData => (
              <FeaturedJobCard
                key={newData.id}
                FeaturedJobCard={newData}
              ></FeaturedJobCard>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-6 mt-8">
          <button
            className={`${
              jobs.length < visible ? 'hidden' : ''
            } py-2 px-5 border-4 border-[#E8E8E8] rounded-lg`}
            onClick={handleShowMoreItems}
          >
            Load More
          </button>
          <button
            className={`${
              7 > visible ? 'hidden' : ''
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

export default FeaturedJob;
