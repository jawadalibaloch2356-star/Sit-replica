import React from 'react'
import { MdWatchLater } from "react-icons/md";
const Home = () => {
  return (
    <div className='m-5'>
        {/* Cards */}
        <div>
            <div className='bg-slate-800 border border-slate-700 rounded-2xl p-2 flex flex-row w-60 gap-4'> 
              <div className='text-white font-semibold'>
                92/102
                <p>Attendance</p>
              </div>
              <div className='text-3xl text-green-500 justify-end'>
                <MdWatchLater />
              </div>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Home