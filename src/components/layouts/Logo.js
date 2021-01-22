import React from 'react'

export default function Logo(props)
{
    const {width, height} = props

    return (
        <svg width={width} height={height} viewBox="0 0 270 108">
            <polygon fill="#38B853" points="54,0 0,0 18,36 36,36 0,108 36,108 72,36"/>
            <polygon fill="#FFFFFF" points="234,36 198,108 225,108 234,90 243,108 270,108"/>
            <polygon fill="#FFFFFF" points="189,36 180,54 144,54 117,108 144,108 153,90 162,108 189,108 180,90 189,90 225,18 180.5,18 81,18 90,36 54,108 99,108 108,90 90,90 99,72 117,72 126,54 108,54 117,36"/>
        </svg>
    )
}