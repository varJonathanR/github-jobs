import React from 'react'
import FilterSection from '../components/FilterSection'
import Jobs from '../components/Jobs'

export default function Main({ jobs, loading, setLoading, error, setError, fullTimeOnly, setFullTimeOnly, countryCode, setCountryCode, setCountryState }) {

    return (
        <section className='w-full mt-8 flex gap-4 flex-wrap'>
            <FilterSection loading={loading} setLoading={setLoading} 
                fullTimeOnly={fullTimeOnly} setFullTimeOnly={setFullTimeOnly} 
                countryCode={countryCode} setCountryCode={setCountryCode}
                setCountryState={setCountryState} />
            <Jobs jobs={jobs} loading={loading} setLoading={setLoading} error={error} setError={setError} />
        </section>
    )
}
