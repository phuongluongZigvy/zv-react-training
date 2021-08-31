import React from 'react'

export default function CloseButton(props) {
    return (
        <div>
            <button onClick={props.onButtonClick}>Close</button>
        </div>
    )
}
