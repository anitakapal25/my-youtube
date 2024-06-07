import React from 'react'

export const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className='h-8' alt='user' src='https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png' />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}
