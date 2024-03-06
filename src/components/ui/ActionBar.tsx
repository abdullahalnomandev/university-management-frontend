import React from "react";

interface IActionBarProps{
    title?:string,
    children?:React.ReactElement | React.ReactNode
}

const ActionBar = ({title,children}:IActionBarProps) => {
    return (
        <>
            <h1>{title}</h1>
             <div style={{display:'flex'}}>
                {children}
             </div>
        </>
    );
};

export default ActionBar;