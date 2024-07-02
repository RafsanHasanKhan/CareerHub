import { useEffect, useState } from "react";
import AppliedJobsCard from "../components/AppliedJobsCard";
import shape1 from '../assets/common-shape/shape-1.png';
import shape2 from '../assets/common-shape/shape-2.png';

const AppliedJobs = () => {
  const [apply, setApply] = useState([])

  useEffect(() => {
    const applyItems = JSON.parse(localStorage.getItem('apply'));
    if (applyItems) {
      setApply(applyItems)
    } else {
      alert('No Data Found-2')
    }
  },[apply])
  
  return (
    <div>
      <div className="relative bg-primary-gradient pt-48 pb-36 text-center">
        <h1 className="text-3xl font-extrabold">Applied Jobs</h1>
        <img
          className="absolute top-0 right-0 hidden sm:block"
          src={shape1}
          alt=""
        />
        <img
          className="absolute bottom-0 left-0 hidden sm:block"
          src={shape2}
          alt=""
        />
      </div>
      <div className="mt-10">
        {apply.map(jobApply => (
          <AppliedJobsCard
            key={jobApply.id}
            AppliedJobsCard={jobApply}
          ></AppliedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;