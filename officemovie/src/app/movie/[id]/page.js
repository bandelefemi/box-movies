'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import Nav from '@/components/nav/Nav'

const page = () => {

  const params = useParams()

  const [details, setDetails] = useState({})
  const [fetching, setFetching] = useState(true)
  const apikey = '6b8eed94'
  const plot = 'short'


  useEffect(()=> {
    const getDetails= async () => {
        try {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&t=${params.id}&plot=${plot}`)
            setDetails(res.data)
            setFetching(false)
        } catch (error) {
            
        }
    }
    getDetails()
  }, [])

 
  
  console.log(details? details: "")
  return (
    <div className=' relative h-screen bg-cover' style={{backgroundImage: `url(${details.Poster})`}}>
        <div className=' absolute top-0 z-20'>
            <Nav/>
        </div>
        <div className=' absolute bg-black opacity-70 w-full h-full' />
        <div className=' text-white absolute w-full h-full flex items-center justify-center'>
            {fetching? 
                <div className="loading">
                    <div></div>
                    <div></div>
                </div>  :
            
            <div className=' flex w-[90%] gap-4 bg-neutral-200 p-8 rounded-2xl'>
                <div className=' min-w-[20%] min-h-full bg-slate-400 rounded-xl overflow-hidden'>
                    <img src={details.Poster} alt='' className=' object-cover w-full h-full' />
                </div>
                <div className=' text-black flex flex-col justify-between py-3'>
                    <p className=' text-2xl font-light lg:text-5xl'>
                        {details.Title}
                    </p>
                    <p className=' mt-3 text-xs lg:text-base'>
                        {details.Plot}
                    </p>
                    <div className=' details font-light mt-3 text-sm grid grid-cols-2 gap-3 w-full justify-between'>
                        <p>
                            Released: <span>{details.Released}</span>
                        </p>
                        <p>
                            Genre: <span>{details.Genre}</span>
                        </p>
                        <p>
                            Casts: <span>{details.Actors}</span>
                        </p>
                        <p>
                            Duration: <span>{details.Runtime}</span>
                        </p>
                        <p>
                            IMBd Rating: <span>{details.imdbRating}</span>
                        </p>
                    </div>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default page