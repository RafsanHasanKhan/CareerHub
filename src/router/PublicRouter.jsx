import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import AppliedJobs from '../pages/AppliedJobs';
import Blog from '../pages/Blog';
import Statistics from '../pages/Statistics';
import StatisticsDetails from '../pages/StatisticsDetails';
import AppliedJobCardDetails from '../components/AppliedJobCardDetails';
const PublicRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Statistics></Statistics>,
        loader: () => fetch('https://rafsanhasankhan.github.io/data/data.json'),
      },
      {
        path: '/StatisticsDetails/:id',
        element: <StatisticsDetails></StatisticsDetails>,
        loader: () => fetch('https://rafsanhasankhan.github.io/data/data.json'),
      },
      {
        path: '/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/AppliedJobs/:id',
        element: <AppliedJobCardDetails></AppliedJobCardDetails>,
        loader: () => fetch('https://rafsanhasankhan.github.io/data/data.json'),
      },
      {
        path: '/Blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default PublicRouter;
