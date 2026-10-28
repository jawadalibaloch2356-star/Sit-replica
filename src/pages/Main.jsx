import React from 'react'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'

const Main = () => {
  return (
    <div>
      {/* Structure */}
      <div className='flex flex-row bg-slate-950'>
  <Sidebar/>
  <Home/>
      </div>
        
    </div>
  )
}

export default Main