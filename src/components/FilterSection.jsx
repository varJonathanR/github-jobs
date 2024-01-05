import React, { useEffect, useState } from 'react'
import { countries } from '../utils/Countries'
import { FetchAPI, STATES_API_URL } from '../utils/API';
import Loading from './Loading';

export default function FilterSection({ loading, setLoading, fullTimeOnly, setFullTimeOnly, countryCode, setCountryCode, setCountryState }) {
    const [states, setStates] = useState(null);

    useEffect(() => {
        FetchAPI(`${STATES_API_URL + countryCode}.json`,
            setStates, setLoading)
    }, [countryCode]);

    const handleCountryChange = e => {
        setCountryCode(e.target.value);
    };

    const handleCountryState = e => {
        setCountryState(e.target.value);
    };

    return (
        <section className='w-full lg:w-30 flex flex-col gap-4'>
            <label className='cursor-pointer select-none'>
                <input type="checkbox" checked={fullTimeOnly} onChange={() => setFullTimeOnly(!fullTimeOnly)} className='mr-2' />
                Full time
            </label>
            <select className='p-2 outline-none' value={countryCode} onChange={handleCountryChange}>
                { countries.map(country => <option key={country.country_code} value={country.country_code}>{country.country}, {country.country_code}</option>) }
            </select>
            { loading && <Loading /> }
            <section className='flex flex-col gap-2 w-full lg:h-80 h-28 overflow-scroll overflow-x-hidden'>
                { states && states.map(state => <label key={state}>
                    <input type="radio" name='state' value={state} onClick={handleCountryState} /> {state}
                </label>) }
            </section>
        </section>
    )
}
