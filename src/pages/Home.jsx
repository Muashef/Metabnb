import React from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className='mt-16 sm:mt-32 '>
      <section className="hero sm:px-[100px] px-4 sm:mb-16 mb-8">
        <div className="flex-col p-0 hero-content lg:flex-row-reverse gap-x-24 gap-y-8">
          <img src="hero-img.png" className="self-start w-full max-w-sm" />
          <div className='flex flex-col gap-y-8'>
            <h1 className="text-4xl sm:text-6xl sm:mt-6">Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'>Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></h1>
            <p className="text-xl sm:text-2xl">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search for location" className="border w-2/3 max-w-sm input border-[#A3A3A3] grow" />
                <button type='button' className="btn bg-[#A02279] text-white sm:btn-wide hover:bg-[#A02279] hover:opacity-90">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-2 sm:flex bg-[#A02279] justify-between sm:px-[100px] px-4 sm:flex-nowrap py-2 gap-6 items-center mb-7'>
        <img src="mb-token.png" alt="mb token" className=''/>
        <img src="metamask.png" alt="metamask" className=''/>
        <img src="opensea.png" alt="opensea" className=''/>
      </section>
      <section className="hero sm:px-[100px] px-4 sm:mt-16 mt-8">
        <div className="flex flex-col">
          <div>
            <h2 className="mb-8 text-4xl font-bold text-center text-black sm:text-6xl sm:mb-16">Inspiration for your next adventure</h2>
          </div>
          <div>
            <Card />
          </div>
        </div>
      </section>
    </div>
  )
}
