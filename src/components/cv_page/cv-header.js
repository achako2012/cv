import React from "react";

import './cv.css'

const CvHeader = () => {
    return (
        <div className="cv_header justify-content-between">
            <img src={process.env.PUBLIC_URL + '/img/photo.png'} alt='myPhoto'></img>
            <div className="contact-content">
                <h1>Aleksander Chako</h1>
                <div className="justify-content-between">
                    <p>Phone : +380982829279</p>
                    <p>E-mail : a.chako2012@gmail.com</p>
                    <p>Telegram : @AleksandrChako</p>
                </div>
            </div>
        </div>
    )
}

export default CvHeader

