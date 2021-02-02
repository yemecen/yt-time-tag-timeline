import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav, Video } from './components';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(async () => {

    const response = await fetch('https://my-json-server.typicode.com/yemecen/jsonserve/videos');
    const data = await response.json();

    setVideos(data);

  }, []);

  return (
    <div className="container">
      <div className="row p-1 mt-3 mb-2">
        <Nav />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-1">
        {
          videos.map((video) => (
            <Video key={video.id} video={video} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
