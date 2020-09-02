import React from "react";

import './education.css'

const Education = ({university, faculty}) => {

    return (
        <>
            <h1>
                Educaition
            </h1>
            <h2>
                {faculty}
            </h2>
            <h3>
                {university}
            </h3>
        </>
    )
}

export default Education;