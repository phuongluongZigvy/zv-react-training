import React from 'react'

export default function Country(props) {
    const {name, urlImg} = props;
    return (
        <div style={{width:"400px"}}>
            <h2>{name}</h2>
            <img style={{width:"300px"}} src={urlImg} alt="img-country"/>
        </div>
    )
}
