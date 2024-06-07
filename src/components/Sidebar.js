import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen) return null
  return (
    <div className='p-5 shadow-lg w-48'>
       
        <ul className='pt-10'>
            <li><Link to="/">Home</Link></li>
            <li className='pt-5'>Sports</li>
            <li className='pt-5'>Gaming</li>
            <li className='pt-5'>Movies</li>
        </ul>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Live</li>
            <li>Gaming</li>
        </ul>
        
    </div>
  )
}
