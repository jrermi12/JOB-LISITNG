import React from 'react'
import Hero from '../components/Hero'
import HomeCards from "../components/Homecards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
    < Hero title="Become a react Dev" subtitle="find react jobs that suits you"/>
    < HomeCards />
    <JobListings isHome={true}/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage