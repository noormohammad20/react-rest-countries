import React, { useEffect, useState } from 'react'

const Countries = () => {
    const [Countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello Form Countries: {Countries.length}</h1>
        </div>
    )
}

export default Countries