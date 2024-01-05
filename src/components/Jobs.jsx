import React, { useEffect, useState } from 'react'
import Job from './Job'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import { timeAgo } from '../utils/TimeAgo'
import Loading from './Loading';
import Error from './Error'

export default function Jobs({ jobs, loading, error }) {
    const [page, setPage] = useState(1);
    const [jobsPerPage, setJobsPerPage] = useState(5);
    const max = jobs?.results?.length / jobsPerPage;

    return (
        <section className='w-full lg:w-70'>
            <section className='w-full flex flex-col gap-6'>
                { loading && <Loading /> }
                { error && <Error /> }
                {jobs && jobs?.results.slice((page - 1) * jobsPerPage, (page - 1) * jobsPerPage + jobsPerPage)
                    .map(job => 
                    <Link key={job.id} to={`/job-details/${job.id}`}>
                        <Job 
                            companyName={job.company.display_name} 
                            jobName={job.title} jobType={job.contract_time} 
                            postedAt={timeAgo(job.created)}
                            location={job.location.display_name} />
                </Link>)}
            </section>
            <Pagination page={page} setPage={setPage} max={max} />
        </section>
    )
}
