import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className=' p-4'>
        <div>
            <Link href={'/'} className=' text-white font-extrabold text-2xl'>
                BOX-MOVIES
            </Link>
        </div>
    </div>
  )
}

export default Nav