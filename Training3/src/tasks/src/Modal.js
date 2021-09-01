import React from 'react'
import { useState } from "react";

export default function Modal() {
    const [value, setValue] = useState('');
    return (
        <div className="Modal">
            <input style={{marginTop:"20px"}} type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        </div>
    )
}
