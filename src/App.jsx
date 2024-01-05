import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobDetails from './routes/JobDetails.jsx'
import Footer from './components/Footer.jsx'
import Logo from './components/Logo.jsx'
import { JOBS_API_URL, FetchAPI } from './utils/API';
import General from './containers/General.jsx'


function App() {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [jobName, setJobName] = useState("");
  const [countryCode, setCountryCode] = useState("AU");
  const [countryState, setCountryState] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
      FetchAPI(JOBS_API_URL + jobName, 
          setJobs, setLoading, setError);
  }, []);

  return (
    <>
      <BrowserRouter>
      <section className='p-4 my-4 m-auto w-11/12'>
        <Logo />
        <Routes>
          <Route path='job-details/:id' element={<JobDetails jobs={jobs} />} />
          <Route path='/' element={<General 
            jobName={jobName} setJobName={setJobName}
            loading={loading} setLoading={setLoading} 
            fullTimeOnly={fullTimeOnly} setFullTimeOnly={setFullTimeOnly} 
            countryCode={countryCode} setCountryCode={setCountryCode} 
            countryState={countryState} setCountryState={setCountryState}
            jobs={jobs} setJobs={setJobs} 
            error={error} setError={setError} />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
    </>
  )
}

export default App
