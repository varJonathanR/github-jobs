import React from 'react'

export default function Job({ companyName, jobName, jobType, location, postedAt }) {
    return (
        <article className='h-114px flex justify-between cursor-pointer bg-white p-3 drop-shadow transition hover:drop-shadow-lg'>
            <section className='h-full flex gap-4 items-center'>
                <div className="h-90px w-90px object-fit">
                    <img src="/jobLogo.jpg" className='h-full w-full' />
                </div>
                <div>
                    <p className='text-sm font-bold'>{companyName}</p>
                    <h1 className='text-lg'>{jobName}</h1>
                    { jobType && <span className='text-xs border border-solid rounded-md py-1 px-2 font-semibold'>{jobType}</span> }
                </div>
            </section>
            <div className='text-sm flex flex-col items-end'>
                <p className='text-gray'><i className="bi bi-globe-americas"></i> {location}</p>
                <p className='text-gray ml-4'><i className="bi bi-clock"> </i>{postedAt}</p>
            </div>
        </article>
    )
}
