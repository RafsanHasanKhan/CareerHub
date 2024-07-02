import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import shape1 from '../assets/common-shape/shape-1.png';
import shape2 from '../assets/common-shape/shape-2.png';

const StatisticsDetails = () => {
  const [newFindData, setNewFindData] = useState([]);
  const {
    salary,
    job_title,
    phone,
    email,
    experiences,
    educational_requirements,
    job_responsibilities,
    job_description,
    location,
  } = newFindData;
  const { id } = useParams();
  const idNumber = parseFloat(id);
  const allData = useLoaderData();
  useEffect(() => {
    const findData = allData.find(data => data.id === idNumber);
    setNewFindData(findData);
    console.log(findData);
  }, [id, allData]);

  const handleAddToApply = () => {
    const addedApplyItems = []
    const applyItems = JSON.parse(localStorage.getItem('apply'))

    if (!applyItems) {
      addedApplyItems.push(newFindData)
      localStorage.setItem('apply', JSON.stringify(addedApplyItems));
      alert('Apply Sucessfully')
    } else {
      const isExist = addedApplyItems.find(apply => apply.id === id)
      if (!isExist) {
        addedApplyItems.push(...applyItems, newFindData)
        localStorage.setItem('apply', JSON.stringify(addedApplyItems))
        alert('Apply Sucessfully');
      } else {
        alert('No Data Found')
      }
    }
  }

  return (
    <div>
      <div className="relative bg-primary-gradient pt-48 pb-36 text-center">
        <h1 className="text-3xl font-extrabold">Job Details</h1>
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
      <div className="">
        <div className="max-w-[1320px] mx-auto py-32 grid grid-cols-1 2xl:grid-cols-3 gap-0 sm:gap-6 ">
          <div className="col-span-1 xl:col-span-2 mx-1 sm:mx-6">
            <p className="leading-8">
              <span className="font-extrabold text-black">
                Job Description:{' '}
              </span>
              <span>{job_description}</span>
            </p>
            <p className="my-6 leading-8">
              <span className="font-extrabold text-black">
                Job Responsibility:{' '}
              </span>
              <span>{job_responsibilities}</span>
            </p>
            <div>
              <h4 className="font-extrabold text-black">
                Educational Requirements:
              </h4>
              <p className="mt-4">{educational_requirements}</p>
            </div>
            <div className="mt-6">
              <h4 className="font-extrabold text-black">Experiences:</h4>
              <p className="mt-4">{experiences}</p>
            </div>
          </div>
          <div className="col-span-1 2xl:w-[450px] mt-20 2xl:mt-0 mx-1 sm:mx-6">
            <div className="p-1 sm:p-8 bg-primary-gradient rounded-lg ">
              <span className="font-extrabold text-black text-xl">
                Job Details
              </span>
              <hr className="my-6" />
              <div className="mb-8">
                <span className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4V16M7 13.182L7.879 13.841C9.05 14.72 10.949 14.72 12.121 13.841C13.293 12.962 13.293 11.538 12.121 10.659C11.536 10.219 10.768 10 10 10C9.275 10 8.55 9.78 7.997 9.341C6.891 8.462 6.891 7.038 7.997 6.159C9.103 5.28 10.897 5.28 12.003 6.159L12.418 6.489M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                      stroke="url(#paint0_linear_7_407)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7_407"
                        x1="1"
                        y1="9.86154"
                        x2="19"
                        y2="9.86154"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7E90FE" />
                        <stop offset="1" stop-color="#9873FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="font-bold text-[#474747] text-xl">
                    salary:{' '}
                  </span>
                  <span className="text-xl">{salary}</span>
                </span>
                <span className="flex items-center gap-2 mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                      stroke="url(#paint0_linear_7_412)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7_412"
                        x1="3"
                        y1="11.8615"
                        x2="21"
                        y2="11.8615"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7E90FE" />
                        <stop offset="1" stop-color="#9873FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="font-bold text-[#474747] text-xl">
                    Job Title:{' '}
                  </span>
                  <span className="text-xl">{job_title}</span>
                </span>
              </div>
              <span className="font-extrabold text-black text-xl">
                Contact Information
              </span>

              <hr className="my-6" />

              <div>
                <span className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z"
                      stroke="url(#paint0_linear_7_465)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7_465"
                        x1="2.25"
                        y1="11.85"
                        x2="21.75"
                        y2="11.85"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7E90FE" />
                        <stop offset="1" stop-color="#9873FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="font-bold text-[#474747] text-xl">
                    Phone:{' '}
                  </span>
                  <span className="text-xl">{phone}</span>
                </span>
                <span className="flex gap-2 my-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75"
                      stroke="url(#paint0_linear_7_463)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7_463"
                        x1="2.25"
                        y1="11.8846"
                        x2="21.75"
                        y2="11.8846"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7E90FE" />
                        <stop offset="1" stop-color="#9873FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="font-bold text-[#474747] text-xl inline-flex flex-wrap">
                    Email: <span className="text-xl">{email}</span>
                  </span>
                </span>
                <span className="flex items-start gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z"
                      stroke="url(#paint0_linear_7_460)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z"
                      stroke="url(#paint1_linear_7_460)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7_460"
                        x1="9"
                        y1="10.4538"
                        x2="15"
                        y2="10.4538"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7E90FE" />
                        <stop offset="1" stop-color="#9873FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_7_460"
                        x1="4.5"
                        y1="12.2308"
                        x2="19.5"
                        y2="12.2308"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7E90FE" />
                        <stop offset="1" stop-color="#9873FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div>
                    <span className="font-bold text-[#474747] text-xl">
                      Address:{' '}
                    </span>
                    <span className="text-xl">{location}</span>
                  </div>
                </span>
              </div>
            </div>
            <button
              onClick={handleAddToApply}
              className="w-full py-5 mt-6 font-extrabold rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDetails;
