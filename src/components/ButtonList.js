import React from 'react'
import { Button } from './Button'

const list = ["All","News","Game shows","Cooking","Criket","Songs","Gaming","Motivation","Pop music","Gadgets","Guitar","Mantras"]
export const ButtonList = () => {
  return (
    <div className='flex'>
        {
            list.map((item,key)=>{
                return  <Button key={key} name={item}/>
            })
        }
    </div>
  )
}
