import React from 'react'
import './Card.css'

export default function card(props) {
    const{urlImg, title, subTitle} = props;
    return (
        <div className="card">
            <div className="card_img">
                <img src={urlImg} alt="card-img"/>
            </div>
            <div className="card_content">
                <div className="title">
                    {title}
                </div>
                <div className="sub_title">
                    {subTitle}
                </div>
            </div>
        </div>
    )
}
