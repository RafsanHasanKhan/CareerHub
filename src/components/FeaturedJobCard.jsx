import { CiLocationOn, CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const FeaturedJobCard = ({ FeaturedJobCard }) => {
  const {
    id,
    job_title,
    company_name,
    designation,
    remote_or_full_time,
    location,
    salary,
    image_url,
  } = FeaturedJobCard;
  return (
    <div className="m-1 lg:max-w-[650px] md:w-[650px] border-2 border-[#E8E8E8] rounded-lg p-10">
      <div>
        <img src={image_url} alt="" />
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-extrabold mb-2">{job_title}</h1>
        <span className="text-xl font-semibold">{company_name}</span>
      </div>
      <div className="flex mt-6 mb-4 gap-4">
        <button className="py-2 px-5 border-2 border-[#E8E8E8] rounded-lg">
          Remote
        </button>
        <button className="py-2 px-5 border-2 border-[#E8E8E8] rounded-lg">
          {remote_or_full_time}
        </button>
      </div>
      <div className="flex gap-6 mb-6">
        <span className="inline-flex items-center gap-1">
          <CiLocationOn /> {location}
        </span>
        <span className="inline-flex items-center gap-1">
          <CiDollar /> Salary : {salary}
        </span>
      </div>
      <div>
        <Link to={`StatisticsDetails/${id}`}>
          <button className="px-5 py-3 font-extrabold rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
