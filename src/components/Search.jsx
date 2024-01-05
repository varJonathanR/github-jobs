import React from 'react'
import { FetchAPI, JOBS_API_ID, JOBS_API_KEY } from '../utils/API';

export default function Search({ setJobs, jobName, setJobName, fullTimeOnly, countryCode, countryState, setLoading, setError }) {
    const lowerCaseCountryCode = countryCode.toLowerCase();

    function inputChange(e) {
        setJobName(e.target.value)
    }

    function fetchJobs() {
        FetchAPI(`https://api.adzuna.com/v1/api/jobs/${lowerCaseCountryCode}/search/1?app_id=${JOBS_API_ID}&app_key=${JOBS_API_KEY}&results_per_page=50&content-type=application/json&what=${jobName}&where=${countryState}&full_time=${fullTimeOnly ? "1" : "0"}`, setJobs, setLoading, setError)
    }

    return (
        <section className='flex items-center justify-center rounded-xl w-full lg:h-52 h-40 my-4 hero-search'>
            <div className="flex items-center justify-between gap-4 p-1 w-4/5 bg-light-gray rounded-sm">
                <label className='w-full flex items-center'>
                    <i className="bi bi-briefcase mx-4"></i>
                    <input 
                        type="text" 
                        placeholder='Search job, e.g: FrontEnd developer'
                        className='w-full bg-transparent outline-none'
                        value={jobName} onChange={inputChange} />
                </label>
                <button 
                    className='bg-light-blue text-white px-8 py-2 rounded-sm'
                    onClick={fetchJobs}>Search</button>
            </div>
        </section>
    )
}
