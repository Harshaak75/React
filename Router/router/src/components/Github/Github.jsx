import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import StoreContent from '../../Context/StoreContext';



function Github() {
    const data = useLoaderData();

    let {imgURL, FollowersCount, setfollower, setimg} = StoreContent();


    useEffect(()=>{
      setfollower(data.followers);
      setimg(data.avatar_url);
    },[data, setfollower, setimg]);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

export const getGithubdata = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}