import React from 'react'

export const VideoCard = ({info}) => {
  //console.log(info);
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' style={{width:"100%", height:"213px"}} alt='thumbnails' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}
// Higher Order Component example
export const AdVideoCard = (VideoCard) => {
  return (
    <div className='p-1 m-1 border border-red-900'>
        <VideoCard />
    </div>
  )
}