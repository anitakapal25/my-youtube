import React, { useState } from 'react'
import { COMMENT_API } from './utils/constants';

const commentsData = [
    {
        name:"Akshay",
        text:"Hi, everyone please checkout this video",
        replies:[]
    },
    {
        name:"Akshay",
        text:"mesage",
        replies:[
            {
                name:"Akshay",
                text:"mesage",
                replies:[]
            },
            {
                name:"Akshay",
                text:"mesage",
                replies:[
                    {
                        name:"Akshay",
                        text:"mesage",
                        replies:[]
                    }
                ]
            }
        ]
    },
    {
        name:"Akshay",
        text:"Hi, everyone please checkout this video",
        replies:[]
    },
    {
        name:"Akshay",
        text:"Hi, everyone please checkout this video",
        replies:[]
    },
    {
        name:"Akshay",
        text:"Hi, everyone please checkout this video",
        replies:[]
    },
    {
        name:"Akshay",
        text:"Hi, everyone please checkout this video",
        replies:[]
    },
    {
        name:"Akshay",
        text:"Hi, everyone please checkout this video",
        replies:[]
    },
]

const Comment = ({data}) => {
    const [comments,setComments] = useState([]);

    // use
    const{name,text,replies} = data
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
            <img
                className='w-12 h-12'
                alt='user'
                src='https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png'
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({comments}) => {

    return comments.map((comment,index)=> (
        <div key={index}>
            <Comment  data={comment} />
            <div className='pl-5 border border-l-black '> 
                <CommentList comments={comment.replies} />
            </div>
        </div>
    )) 
}

export const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}
