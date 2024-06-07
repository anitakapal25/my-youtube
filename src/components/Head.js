import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/appSlice'
import { SEARCH_API,YOUTUBE_VIDEOS_API } from './utils/constants'
import { cacheResults } from './utils/searchSlice'

const Head = () => {

  const dispatch = useDispatch()

  const [searchQuery,setSearchQuery] = useState("")
  const [suggestions,setSuggestions] = useState("")
  const [showSuggestions,setShowSuggestions] = useState(false)

  const searchCache = useSelector((store)=>store.search)
  /**
   * searchCache = {
   *  "iphone" : ["iphone 11","iphone 14"]
   * }
   * searchQuery = iphone
   */
  useEffect(()=>{
    //make an api call after every key press
    //but if the difference between 2 api calls is < 200ms
    //decline the api call
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
    },200)

    return () => {
      clearTimeout(timer)
    }
  },[searchQuery])

  /**
   * Reconciliation process
   * key pressed - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   * 
   * key pressed-p
   * - destroy the component(useEffect return method clearTimeout)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   */
 
  const getSearchSuggestions = async()=>{
    console.log("Api call - "+searchQuery)
    const data = await fetch(SEARCH_API+searchQuery)
    const json = await data.json();
    console.log(json)
    setSuggestions(json[1])

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    )
  }

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }

  const handleListClick = (s) => {
    
    setSearchQuery(s);
    setShowSuggestions(false);
    
    console.log('aaaaaa');
    console.log(s);
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' src='https://static.thenounproject.com/png/683452-200.png' alt='menu' />
            <a href='/'>
            <img className='h-8 mx-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/YouTube_logo_%282017%29.png/640px-YouTube_logo_%282017%29.png' alt='youtube-logo' />
            </a>
        </div>  
        <div className='col-span-10 px-10'>
          <div>
            <input 
              onChange={(e)=>setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
              value={searchQuery}
              className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
            <button className='border border-gray-400 p-2 rounded-r-full'>Search
                {/* <img alt='search' className='h-8' src='https://w7.pngwing.com/pngs/648/554/png-transparent-computer-icons-search-and-rescue-photography-business-magnifier.png' /> */}
            </button>
          </div>
          {showSuggestions && (
          <div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {
                suggestions.map((s,index)=>(
                  <li key={index} onClick={()=> {handleListClick(s)}} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>
                ))
              }
            </ul>
          </div>
          )}
        </div>    
        <div className='col-span-1'>
            <img className='h-8' alt='user' src='https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png' />
        </div>  
    </div>
  )
}

export default Head
