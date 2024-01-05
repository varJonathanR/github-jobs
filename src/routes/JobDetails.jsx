import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { timeAgo } from '../utils/TimeAgo';

export default function JobDetails({ jobs, loading, error }) {
    const { id } = useParams();
    const stringId = id.toString();
    const jobDetails = jobs?.results.find(job => job.id === stringId);

    console.log(id)
    console.log(jobDetails);

    return (
        <section className="w-full mt-8 flex gap-4 flex-wrap">
            <section className='w-30'>
                <Link to={"/"} className='text-light-blue font-bold'>
                    <i className="bi bi-arrow-left text-light-blue"></i> Back to search
                </Link>
                { jobDetails && <>
                    <h3 className='font-bold text-gray mt-8'>HOW TO APPLY</h3>
                    <a 
                        href={jobDetails.redirect_url}
                        target="_blank" rel="noopener noreferrer" 
                        className='mt-4 text-light-blue'>Apply link</a>
                </> }
            </section>
            { loading && <Loading /> }
            { jobDetails &&
                <section className='w-70'>
                    <div className='flex gap-4'>
                        <h1 className='font-bold text-xl'>{jobDetails.title}</h1>
                        { jobDetails.contract_time && <span className='text-sm border border-solid rounded-md py-1 px-2 font-bold'>{jobDetails.contract_time}</span> }
                    </div>
                    <span className='text-gray text-sm'>
                        <i className="bi bi-clock mr-1"></i> {timeAgo(jobDetails.created)}
                    </span>
                    <section className="flex items-center gap-4 my-4">
                        <img src="/jobLogo.jpg" className='h-90px w-90px' />
                        <div className="">
                            <p className='font-bold text-lg'>{jobDetails.company?.display_name}</p>
                            <p className='text-gray'>
                                <i className="bi bi-globe-americas mr-1"></i> 
                                {jobDetails.location.display_name}
                            </p>
                        </div>
                    </section>
                    <p className='mt-4'>{jobDetails.description}</p>
                    <p className='mt-4 mb-2'>Salary Range:</p>
                    <p className='text-lg flex items-center gap-4'>
                        <i className="bi bi-cash-coin"></i>
                        ${jobDetails.salary_min} - ${jobDetails.salary_max}</p>
                </section> }
        </section>
    )
}
