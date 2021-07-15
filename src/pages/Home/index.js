import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <>
            <h3>Página Home</h3>
            <Link to="/about">About</Link>
        </>
    )
}

export default Page;