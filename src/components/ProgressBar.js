import React, { useState } from 'react'

function ProgressBar({ progress = 100, color = 'bg-green-400', height = "h-1.5", className="" }) {

    return (
        <div class={`w-full bg-gray-200 rounded-full ${ height } ${ className }`}>
            <div class={ `${ color } ${ height } rounded-full` } style={{width: progress + "%"}}></div>
        </div>
    )
}

export default ProgressBar