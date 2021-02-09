import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import YouTube from 'react-youtube';

const Video = ({ video }) => {
    const [player, setPlayer] = useState(null);
    const [comments, setComments] = useState([]);
    const apiKey = process.env.REACT_APP_API_TOKEN;

    const onReady = (event) => {
        setPlayer(event.target);
        console.log(event.target);
    };

    const onPlayVideo = (second) => {
        //player.playVideo();
        player.seekTo(second);
    };

    /*const opts = {
        frameborder: '0',
        playerVars: {
            autoplay: 0,
        },
    };*/

    const getOnePageComment = async (videoId, pageToken) => {
        const url = [
            'https://www.googleapis.com/youtube/v3/commentThreads?',
            'part=snippet,replies',
            'maxResults=50',
            `videoId=${videoId}`,
            `key=${apiKey}`,
            `pageToken=${pageToken}`,
        ].join('&');

        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        return json;
    };

    const getAllPagesComments = (videoId, pageToken) => {
        // get the comments for the first page by making simple API call
        return getOnePageComment(videoId, pageToken)
            .then((result) => {
                const comments = result.items;

                // Base case: this is the last page
                if (!result.nextPageToken) return comments;

                // Recursive step: get the rest of the pages, then concat it
                return getAllPagesComments(videoId, result.nextPageToken)
                    .then(restOfVideoIds => comments.concat(restOfVideoIds));
            });
    };

    useEffect(() => {
        getOnePageComment(video.id.videoId, '').then((ytData) => {
            setComments(ytData.items); //console.log("comments==>" + ytData); 
        });
        //console.log("effect");
    }, []);

    return (
        <div className="col">
            <div className="card h-100">
                <div className="ratio ratio-16x9">
                    <YouTube videoId={video.id.videoId} onReady={onReady} containerClassName={"youtubeContainer"} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.snippet.channelTitle}</h5>
                    <p className="card-text">
                        {
                            comments !== undefined &&
                            comments.map((comment) => (<Tag key={comment.id} onPlayVideo={onPlayVideo} tag={comment.snippet.topLevelComment.snippet.textOriginal} />))
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video;