
const JobCategoryListCard = ({
  category,
  onSelectCategory,
  jobs,
  selectedCategory,
}) => {
  const filterJobs = jobs.filter(j => j.category === category);
  console.log(category);
  return (
    <div onClick={() => onSelectCategory(category)}>
      <div
        onClick={() => onSelectCategory(category)}
        className={`${
          selectedCategory === category
            ? 'bg-blue-300 text-white'
            : 'bg-primary-gradient'
        } w-[310px] h-[240px]  p-10 rounded-lg`}
      >
        <div className="p-4 bg-slate-300 inline-flex rounded-lg">
          <img src="" alt="" />
        </div>
        <div className="mt-8">
          <h1>
            <button>{category}</button>
          </h1>
          <span>{filterJobs.length}+ Jobs Available</span>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryListCard;
