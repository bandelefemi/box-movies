'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Hero = () => {

    const router = useRouter()
    const [title, setTitle] = useState("")
    const [query, setQuery] = useState(null)
    const [details, setDetails] = useState(null)

    const last5Queries = query?.slice(-5)
    const apikey = '6b8eed94'
    const plot = 'short'


    useEffect(()=> {
        const getDetails= async () => {
            try {
                const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&t=${title}&plot=${plot}`)
                setDetails(res.data)
            } catch (error) {
                
            }
        }
        getDetails()
    }, [title])

    useEffect(()=> {
        const getQuery= async () => {
            try {
                const res = await axios.get(`https://localhost:7137/api/movieapi/getallmovies`)
                setQuery(res.data)
            } catch (error) {
                
            }
        }
        getQuery()
    }, [])

    // console.log(last5Queries)


    const saveMovieTitle = async (title) => {
        try {
          const response = await fetch('https://localhost:7137/api/movieapi/createmovie', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Title: title }),
          });
    
          if (response.ok) {
            console.log('Movie title saved successfully.');
          } else {
            console.error('Failed to save movie title.');
          }
        } catch (error) {
            console.error('Network Error:', error);
            if (error.response) {
              console.error('Response Status:', error.response.status);
              console.error('Response Text:', await error.response.text());
            }
          }
      };

      const handleSubmit =(e)=> {
        e.preventDefault()

        saveMovieTitle(title)

        router.push(`/movie/${title}`)

      }

    
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
                    <img src="/assets/icons/search2.svg" alt="" onClick={handleSubmit} className=' w-9 cursor-pointer' />
                </div>

                {/* recent queries */}
                <div className=' bg-neutral-800/50 flex gap-4 mt-7 p-5 text-white justify-center'>
                    <p className=' font-semibold text-gray-300'>
                        Recent searches:
                    </p>
                    {last5Queries?.map((q, index)=> (
                        <Link href={`/movie/${q.title}`} key={index} className=' text-gray-400'>
                            {q.title}
                        </Link>
                    ))}
                </div>

                {/* search results */}
                <div>
                    {details?.Title && <p className=' font-semibold text-sm text-neutral-300 mb-3'>
                        Search result:
                    </p>}
                    <div className=' w-32 cursor-pointer h-48 rounded-xl overflow-hidden'>
                        {/* <Link href={`/movie/${title}`}> */}
                            <img src={details?.Poster} alt="" onClick={handleSubmit} className=' object-cover' />
                        {/* </Link> */}
                    </div>
                    <p onClick={handleSubmit} className=' cursor-pointer text-xs w-full'>
                        {details?.Title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero