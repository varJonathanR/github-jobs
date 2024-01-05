import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link to={"/"} className="text-xl">
            <span className='font-bold'>Github</span> Jobs
        </Link>
    )
}
