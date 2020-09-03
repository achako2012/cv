import React from "react";

import './app_header.css'

const AppHeader = () => {
    return (
        <div className="app_header d-flex">
            <img src={process.env.PUBLIC_URL + '/img/photo.jpeg'} alt='photo'></img>
            <h2>Тут контактн инфо</h2>
        </div>
    )
}

export default AppHeader