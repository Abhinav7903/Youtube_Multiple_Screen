import  { useState } from 'react';

import './index.css';

function App() {
  const [videoLinks, setVideoLinks] = useState('');
  const [videoCodes, setVideoCodes] = useState([]);

  const addVideo = () => {
    // Extract video code from the YouTube link
    const videoCode = extractVideoCode(videoLinks);
    if (videoCode) {
      setVideoCodes([...videoCodes, videoCode]);
      setVideoLinks('');
    }
  };

  const extractVideoCode = (link) => {
    // Regular expression to extract video code from YouTube link
    const regExp = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = link.match(regExp);
    return match && match[1];
  };

  return (
    <div className='overflow-hidden flex flex-col items-center justify-center h-screen'>
    <h1 className='text-2xl font-bold mb-4'>Youtube Multiple Screen</h1>
    <div className='flex flex-col items-center'>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        {videoCodes.map((videoCode, index) => (
          <div className='w-full px-4 mb-4  sm:flex-col' key={index}>
            <div className='bg-white rounded-lg p-4 shadow'>
              <iframe
                title={`YouTube Video ${index + 1}`}
                src={`https://www.youtube.com/embed/${videoCode}`}
                frameBorder='0'
                allowFullScreen
                className='w-full h-48 object-cover'
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  <div className='mt-4'>
    <label className='block'>
      <input
        className="placeholder-italic placeholder-slate-400
        block border rounded-md w-half 
        py-2 pl-3 pr-9 shadow-sm focus:outline-none focus:border-sky-500
        focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type='text'
        placeholder='Enter YouTube Video Link'
        value={videoLinks}
        onChange={(e) => setVideoLinks(e.target.value)}
      />
    </label>
    <button className='mt-2 ml-10 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full' onClick={addVideo}>
      Add Video
    </button>
  </div>
</div>
  );
}

export default App;
