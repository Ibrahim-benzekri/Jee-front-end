import React from 'react'

export default function Landing() {
  return (
    <>
<section className="bg-secondary-500 poster relative text-gray-300" style={{backgroundImage:'url("car2.jpg")' , backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%'}}>
    <div className="container mx-auto pb-24 pt-72 px-4">
        <div className="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
            <div className="px-4 w-full md:w-9/12 xl:w-7/12 2xl:w-6/12"> 
                <p className="font-bold font-sans mb-1 text-2xl text-white">Car Rentals</p>
                <h1 className="font-bold mb-6 text-5xl text-white md:leading-tight lg:leading-tight lg:text-6xl">For Your <span class="text-primary-500">Everyday Commute</span> or <span class="text-primary-500">Leisure</span></h1>
            </div>
        </div>
    </div>
</section>

    </>
  )
}
