import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ AppliedJobsCard }) => {

  const {
    id,
    job_title,
    company_name,
    salary,
    location,
    image_url,
    remote_or_full_time,
  } = AppliedJobsCard;


  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="flex justify-between flex-col md:flex-row items-center mt-6 mb-10 border-2 border-[#F4F4F4] p-8">
        <div className="flex items-center gap-8 text-center md:text-left  flex-col md:flex-row ">
          <div className="bg-[#F4F4F4] w-[240px] h-[240px] flex px-12">
            <img className="self-center" src={image_url} alt="" />
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <Link to={`/AppliedJobs/${id}`}>
            <button className="px-5 py-3 font-extrabold rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;