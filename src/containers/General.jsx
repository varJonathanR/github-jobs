import React from 'react'
import Search from '../components/Search'
import Main from '../containers/Main';

export default function General({ jobs, setJobs, jobName, setJobName, loading, setLoading, error, setError, fullTimeOnly, setFullTimeOnly, countryCode, setCountryCode, countryState, setCountryState }) {
    return (
        <>
            <Search 
                setJobs={setJobs} jobName={jobName} 
                setJobName={setJobName} countryCode={countryCode}
                fullTimeOnly={fullTimeOnly} countryState={countryState}
                setLoading={setLoading} setError={setError} />
            <Main 
                jobs={jobs} setCountryState={setCountryState}
                loading={loading} setLoading={setLoading} 
                error={error} setError={setError} 
                fullTimeOnly={fullTimeOnly} setFullTimeOnly={setFullTimeOnly} 
                countryCode={countryCode} setCountryCode={setCountryCode} />
        </>
    )
}
