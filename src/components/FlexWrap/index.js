import React from "react";
import "./style.css"

export function FlexRow({children}){
    return (
        <div className='flex-row'>{children}</div>
    )
}

export function FlexCol({children}){
    return (
        <div className='flex-col'>{children}</div>
    )
}