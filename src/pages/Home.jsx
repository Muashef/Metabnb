import React from 'react'

export default function Home() {
  return (
    <div className='sm:mt-32 sm:mb-16 sm:px-[100px] px-4 mt-16 mb-8'>
      <div className="hero">
        <div className="flex-col hero-content lg:flex-row-reverse gap-x-24 gap-y-8">
          <img src="hero-img.png" className="self-start w-full max-w-sm" />
          <div className='flex flex-col gap-y-8'>
            <h1 className="text-4xl sm:text-6xl sm:mt-6">Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'>Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></h1>
            <p className="text-xl sm:text-2xl">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search for location" className="border input border-[#A3A3A3]" />
                <button className="btn bg-[#A02279] text-white sm:btn-wide">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
