import React from 'react';

import './objective.css'

const Objective = ({label}) => {
    return(
        <div>
            <h1 className="app-list">
                Objective here!
            </h1>
            <p>
                {label}
            </p>
        </div>
    )
}

export default Objective