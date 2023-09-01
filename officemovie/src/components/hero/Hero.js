'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Hero = () => {

    const [title, setTitle] = useState("")
    const [query, setQuery] = useState(null)
    const [details, setDetails] = useState(null)
    // const [fetching, setFetching] = useState(true)
    const apikey = '6b8eed94'
    const plot = 'short'


    useEffect(()=> {
        const getDetails= async () => {
            try {
                const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&t=${title}&plot=${plot}`)
                setDetails(res.data)
                // setFetching(false)
            } catch (error) {
                
            }
        }
        getDetails()
    }, [title])

    // console.log(details)


    // useEffect(()=>{
    //     const getQuery=async()=> {
    //         try {
    //             const res = await axios.get('https://localhost:7137/api/movieapi')
    //             setQuery(res.data)
    //         } catch (error) {
    //            console.error('Error:', error) 
    //         }
    //     }
    //     getQuery()
    // }, [])
           

    // console.log(title)
  return (
    <div className='relative h-screen bg-cover' style={{backgroundImage: "url('/assets/backgrounds/hero-bg.svg')"}}>
        <div className=' absolute top-0 bg-black h-screen w-full opacity-60 z-10' />
        <div className=' absolute flex items-center justify-center text-white h-full w-full z-20'>
            <div className=' w-full flex flex-col items-center'>
                <p className=' text-3xl text-gray-300 font-extrabold'>
                    BOX-MOVIES
                </p>

                {/* search inputs */}
                <div className=' flex w-[70%] justify-between p-6 mt-5 rounded-[50px] bg-white'>
                    <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='Enter title' className=' w-full outline-none text-gray-600 text-xl' />
                    <Link href={`/details/${title}`}>
                        <img src="/assets/icons/search2.svg" alt="" className=' w-9 cursor-pointer' />
                    </Link>
                </div>

                {/* recent queries */}
                <div className=' bg-neutral-800/20 flex gap-4 mt-7 p-5 text-white justify-center'>
                    <p className=' font-semibold text-gray-300'>
                        Recent searches:
                    </p>
                    {query?.map((q, index)=> (
                        <p key={index} className=' text-gray-400'>
                            {q.title}
                        </p>
                    ))}
                </div>

                {/* search results */}
                <div>
                    {details?.Title && <p className=' font-semibold text-sm text-neutral-300 mb-3'>
                        Search result:
                    </p>}
                    <div className=' w-32 h-48 rounded-xl overflow-hidden'>
                        <Link href={`/details/${title}`}>
                            <img src={details?.Poster} alt="" className=' object-cover' />
                        </Link>
                    </div>
                    <Link href={`/details/${title}`} className=' text-xs w-full'>
                        {details?.Title}
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero