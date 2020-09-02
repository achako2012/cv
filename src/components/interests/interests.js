import React from 'react'

import './interests.css'

const Interests = ({interests}) => {
    return (
        <>
            <h1 className="app-list">
                Interests
            </h1>
            <p>
                {interests}
            </p>
        </>
    )
}

export default Interests;