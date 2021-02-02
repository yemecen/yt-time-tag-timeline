import React, { useState } from 'react';
import Tag from './Tag';
import YouTube from 'react-youtube';

const Video = ({ video }) => {
    const [player, setPlayer] = useState(null);

    const onReady = (event) => {
        setPlayer(event.target);
        console.log(event.target);
    };

    const onPlayVideo = (second) => {
        //player.playVideo();
        player.seekTo(second);
    };

    const opts = {
        frameborder: '0',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="col">
            <div className="card h-100">
                <div className="ratio ratio-16x9">
                    <YouTube videoId="f5Vc3kBrbfU" onReady={onReady} containerClassName={"youtubeContainer"} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.name}</h5>
                    <p className="card-text">
                        {
                            video.comments.map((comment) => (<Tag key={comment.id} onPlayVideo={onPlayVideo} tag={comment.text} />))
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video;

/*import React from "react";
import Tag from './Tag';

const Video = ({video}) => {

    return (
        <div className="col">
            <div className="card h-100">
                <div className="ratio ratio-16x9">
                    <iframe src={video.url} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.name}</h5>
                    <p className="card-text">
                        {
                            video.comments.map((comment)=>(<Tag key={comment.id} tag={comment.text}/>))
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video;*/