import React, { useState } from 'react'

export default function Pagination({ page, setPage, max }) {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = action => {
        if(action === "next" && currentPage < max) {
            setCurrentPage(currentPage + 1);
            setPage(page + 1);
        } else if(action === "back" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setPage(page - 1);
        }
    };

    return (
        <section className='w-full mt-4 flex gap-4 justify-center items-center'>
            <button 
                className='border border-gray rounded p-2 transition hover:border-light-blue'
                onClick={() => changePage("back")}>
                <i className="bi bi-caret-left transition hover:text-light-blue"></i>
            </button>
            <input 
                value={currentPage} 
                className='w-8 text-center h-11 border rounded outline-none'
                autoComplete='off' disabled /> of {max}
            <button 
                className='border border-gray rounded p-2 transition hover:border-light-blue'
                onClick={() => changePage("next")}>
                <i className="bi bi-caret-right transition hover:text-light-blue"></i>
            </button>
        </section>
    )
}
