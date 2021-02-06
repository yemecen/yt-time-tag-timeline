import React from "react";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Tag = ({ tag, onPlayVideo }) => {

    const timeToSecond = (time) => {
        let hour, minute, second = "0";

        if (time.split(":").length === 2) {
            hour = parseInt("0");
            minute = parseInt(time.split(":")[0]) || 0;
            second = parseInt(time.split(":")[1]) || 0;
        } else {
            hour = parseInt(time.split(":")[0]) || 0;
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
            {tag.match(/[0-5]?[0-9]:[0-5][0-9]/g) != null && (<OverlayTrigger
                overlay={
                    <Tooltip id={'tooltip-bottom'}>
                        {tag}
                    </Tooltip>
                }>
                <Button variant="outline-primary" size="sm" onClick={startVideo}>{tag.match(/[0-5]?[0-9]:[0-5][0-9]/g)}</Button>
            </OverlayTrigger>)
            }
        </>
    )
}

export default Tag;