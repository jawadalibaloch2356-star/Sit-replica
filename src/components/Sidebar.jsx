import React from 'react'


const Sidebar = () => {
  return (
    <div className='w-75 bg-slate-900 flex flex-col'>
        {/* logo + name */}
        <div className=' flex flex-row p-5 gap-3'>
            {/* logo */}
            <div className='text-blue-600 font-extrabold text-2xl  border border-blue-500 rounded-3xl p-2'>
                SIT
            </div>
            <div className='text-white'>
              <p>Saylani</p>
              <p>IT Training</p>
            </div>
        </div>
        
        <br />
        <hr className='text-white m-3'></hr>
        <br />
{/* Links */}
        <div className=''>
          <div className='flex flex-col gap-5 text-blue-600 font-bold p-5'>
        <a href="#Dashboard" className='hover:text-blue-400 hover:bg-slate-500'>Dashboard</a>
        <a href="#Progress" className='hover:text-blue-400 hover:bg-slate-500'>Progrss</a>
        <a href="#Attendance" className='hover:text-blue-400 hover:bg-slate-500'>Attendance</a>
        <a href="#Payment" className='hover:text-blue-400 hover:bg-slate-500'>Payment</a>
        <a href="#Assignment" className='hover:text-blue-400 hover:bg-slate-500'>Assignment</a>
        <a href="#Quiz" className='hover:text-blue-400 hover:bg-slate-500'>Quiz</a>
          </div>
        </div>
        <br /><br /><br /><br /> <br></br> <br></br>
        {/* Profile */}
        <div className='flex flex-row items-center px-5'>
          <div className='p-2 '>
            <img className='rounded-full h-20 w-auto' src="https://i.pinimg.com/1200x/6a/57/8e/6a578e543be5d9347e7fccee4f2d3507.jpg" alt="" />
          </div>
          <div className='text-white font-semibold'>
            Jawad Ali
          </div>
        </div>
        
    </div>
    )
}

export default Sidebar