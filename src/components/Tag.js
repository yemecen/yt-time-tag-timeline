import React from "react";

const Tag = ({ tag, onPlayVideo }) => {

    const timeToSecond = (time) => {
        let hour,minute,second="0";

        if (time.split(":").length === 2) {
            hour = parseInt("0");
            minute = parseInt(time.split(":")[0]) || 0;
            second = parseInt(time.split(":")[1]) || 0;
        } else {
            hour = parseInt(time.split(":")[0]) || 0 ;
            minute = parseInt(time.split(":")[0]) || 0;
            second = parseInt(time.split(":")[1]) || 0;
        }

        return (hour * 3600) + (minute * 60) + second;
    }

    const startVideo = (event) => {
        event.preventDefault();
        console.log(event.target.innerText);
        
        onPlayVideo(timeToSecond(event.target.innerText));
    }

    return (
        <>
            <a href="" className="link-primary" data-bs-toggle="tooltip" data-bs-placement="top"
                title={tag} onClick={startVideo} ><span className="badge bg-primary">{tag.match(/[0-5][0-9]:[0-5][0-9]/g)}</span></a>
        </>
    )
}

export default Tag;
