import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import JobCategoryList from "../components/JobCategoryList";
import FeaturedJob from '../components/FeaturedJob';
import { useEffect, useState } from "react";

const Statistics = () => {
  // Data Load
  const jobsData = useLoaderData();
  
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  

  useEffect(() => {
    setJobs(jobsData)
    

    const uniqueCategories = [...new Set(jobsData.map(job => job.category))]
    setCategories(['All', ...uniqueCategories]);
  },[])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job => job.category === selectedCategory);
            setFilteredJobs(filtered);
    }
  }, [jobs, selectedCategory])
  
  const handleSelectCategory = category => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Hero></Hero>
      <JobCategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        jobs={jobs}
      ></JobCategoryList>
      <FeaturedJob jobs={filteredJobs}></FeaturedJob>
    </div>
  );
};

export default Statistics;