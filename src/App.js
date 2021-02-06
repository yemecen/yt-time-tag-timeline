import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav, Video } from './components';

function App() {

  const [videos, setVideos] = useState();
  const apiKey = process.env.REACT_APP_API_TOKEN;

  useEffect(async () => {

    /*const response = await fetch('https://my-json-server.typicode.com/yemecen/jsonserve/videos');
    const data = await response.json();

    setVideos(data);*/
    console.log(`Videos State Type : ${typeof videos}`);
    if(videos !== undefined) console.log(`Videos State Length : ${videos.length}`) ;

  }, []);

  const onChange = (event) => {

    event.preventDefault();

    getSearchVideo(event.target.value, '').then((ytData) => { setVideos(ytData.items)});
  }

  const getSearchVideo = async (q, pageToken) => {
    const url = [
      'https://youtube.googleapis.com/youtube/v3/search?',
      'part=snippet',
      'maxResults=3',
      `q=${q}`,
      `key=${apiKey}`,
      `pageToken=${pageToken}`,
    ].join('&');

    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    return json;
  };

  return (
    <div className="container">
      <div className="row p-1 mt-3 mb-2">
        <Nav />
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" onChange={onChange} />
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 p-1">
        {//console.log(`Videos State : ${typeof videos}`)
          videos !== undefined && videos.map((video) => (
            <Video key={video.id.videoId} video={video} />
          ))
        }
      </div>
    </div>
  );
}

export default App;