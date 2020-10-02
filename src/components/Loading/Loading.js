import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './Loading.scss';



const Loading = ({
    variant,
}) => {
    let className = "loading ";

    switch(variant){
        case "full page":
            className += "loading--fullPage";
            break;
        
        case "block":
            className += "loading--block";
            break;
    }

    return (
        <div className={className}>
            <div className = 'spinner'>
                <ClipLoader
                    size={40}
                    color={"#0091ae"}
                    loading={true}
                />
            </div>
        </div>
    )
}

export default Loading;