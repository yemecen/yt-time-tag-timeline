import React, { useState } from 'react';
import './App.css';
import { Nav, Video } from './components';

function App() {

  const [videos, setVideos] = useState();
  const apiKey = process.env.REACT_APP_API_TOKEN;

  /*const onChange = (event) => {

    event.preventDefault();

    getSearchVideo(event.target.value, '').then((ytData) => { setVideos(ytData.items) });
  }*/

  const getSearchVideo = async (q, pageToken) => {
    const url = [
      'https://youtube.googleapis.com/youtube/v3/search?',
      'part=snippet',
      'maxResults=1',
      `q=${q}`,
      `key=${apiKey}`,
      `pageToken=${pageToken}`,
    ].join('&');

    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    return json;
  };

  const getVideoById = async (videoId) => {
    const apiRequest = [
      'https://youtube.googleapis.com/youtube/v3/videos?',
      'part=snippet,contentDetails,statistics',
      `id=${videoId}`,
      `key=${apiKey}`,
    ].join('&');

    const response = await fetch(apiRequest);
    const json = await response.json();
    return json
  }

  /*const onClick = (event) => {
    event.preventDefault();

    if (document.getElementById("search").value.split('https://www.youtube.com/watch?v=').length === 2) {

      getVideoById(document.getElementById("search").value.split('https://www.youtube.com/watch?v=')[1]).then((video) => {
        const videoInfo = [{ 'id': { 'videoId': `${video.items[0].id}` }, 'snippet': { 'channelTitle': `${video.items[0].snippet.channelTitle}` } }];
        setVideos(videoInfo);
      });

    } else {
      getSearchVideo(document.getElementById("search").value, '').then((ytData) => { setVideos(ytData.items) });
    }

  }*/

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (document.getElementById("search").value.split('https://www.youtube.com/watch?v=').length === 2) {

        getVideoById(document.getElementById("search").value.split('https://www.youtube.com/watch?v=')[1]).then((video) => {
          const videoInfo = [{ 'id': { 'videoId': `${video.items[0].id}` }, 'snippet': { 'channelTitle': `${video.items[0].snippet.channelTitle}` } }];
          setVideos(videoInfo);
        });

      } else {
        getSearchVideo(document.getElementById("search").value, '').then((ytData) => { setVideos(ytData.items) });
      }
    }
  }

  return (
    <div className="container">
      <div className="row p-1 mt-3 mb-2">
        <Nav />
      </div>

      <div className="row position-relative">
        <div className="col-md-5 g-4 position-absolute top-0 start-50 translate-middle">
          <div className="input-group mb-2">
            <input type="text" id="search" className="form-control" placeholder="Video link or word search... + Enter" aria-label="Search" aria-describedby="basic-addon1" onKeyPress={onKeyPress} />
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
        {
          videos !== undefined && videos.map((video) => (
            <Video key={video.id.videoId} video={video} />
          ))
        }
      </div>
    </div>
  );
}

export default App;