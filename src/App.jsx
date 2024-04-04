import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Homecards from './components/Homecards'
import JobListings from './components/JobListings'
import ViewAllJobs from "./components/ViewAllJobs"
const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Become a React Dev" subtitle=" Find the React job that fits your skills and needs" />
      <Homecards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App