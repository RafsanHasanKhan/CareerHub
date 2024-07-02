// import { useState, useEffect } from 'react';
// import CategoryList from './CategoryList';
// import JobList from './JobList';
// import jobsData from '../../public/jobsData.json';

// const App = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Load jobs data from JSON on component mount
//   useEffect(() => {
//     setJobs(jobsData); // Simulating data fetch from JSON
//     // Extract categories from jobs data
//     const uniqueCategories = [...new Set(jobsData.map(job => job.category))];
//     setCategories(['All', ...uniqueCategories]); // Include "All" option as well
//   }, []);

//   // Filter jobs based on selected category
//   useEffect(() => {
//     if (selectedCategory === 'All') {
//       setFilteredJobs(jobs);
//     } else {
//       const filtered = jobs.filter(job => job.category === selectedCategory);
//       setFilteredJobs(filtered);
//     }
//   }, [jobs, selectedCategory]);

//   const handleSelectCategory = category => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <h1>Job Listings</h1>
//       <CategoryList
//         categories={categories}
//         onSelectCategory={handleSelectCategory}
//       />
//       <JobList jobs={filteredJobs} />
//     </div>
//   );
// };

// export default App;
