import React from 'react'

export default function ByCategorySection() {
  return (
  <section class="py-10"> 
    <div class="container mx-auto px-4"> 
        <div class="-mx-4 flex flex-wrap items-center mb-6"> 
            <div class="px-4 w-full md:flex-1"> 
                <h2 class="font-medium mb-1 text-primary-500 text-xl">Our Fleet</h2>
                <h3 class="capitalize font-bold mb-4 text-4xl text-gray-900">Browse by Category</h3>
                <div class="bg-primary-500  w-2/12"></div>                             
            </div>
            <div class="px-4 w-full md:w-auto"> 
                <a href="#" class="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white">View All</a> 
            </div>                         
        </div>
        <div class="-mx-3 flex flex-wrap justify-center"> 
            <div class="p-3 w-full md:w-6/12 lg:w-3/12"> 
                <a href="#" class="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"><img src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMyM3x8c3V2fGVufDB8fHx8MTYzMTY4Njc4Nw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" class="group-hover:opacity-90 w-full" alt="..." width="600" height="450"/><div class="px-6 py-4">
                        <h4 class="font-bold text-xl">Sedans</h4>
                    </div></a> 
            </div>
            <div class="p-3 w-full md:w-6/12 lg:w-3/12"> 
                <a href="#" class="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"><img src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQzfHxjYXIlMjBzdXZ8ZW58MHx8fHwxNjMxNjg0ODkw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" class="group-hover:opacity-90 w-full" alt="..." width="600" height="450"/><div class="px-6 py-4">
                        <h4 class="font-bold text-xl">SUVs</h4>
                    </div></a> 
            </div>
            <div class="p-3 w-full md:w-6/12 lg:w-3/12"> 
                <a href="#" class="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"><img src="https://images.unsplash.com/photo-1597210159614-966c9f632c89?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDh8fGNhciUyMGNvbnZlcnRpYmxlfGVufDB8fHx8MTYzMTY4NTExMA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" class="group-hover:opacity-90 w-full" alt="..." width="600" height="450"/><div class="px-6 py-4">
                        <h4 class="font-bold text-xl">Convertibles</h4>
                    </div></a> 
            </div>
            <div class="p-3 w-full md:w-6/12 lg:w-3/12"> 
                <a href="#" class="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"><img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxzcG9ydHMlMjBjYXJ8ZW58MHx8fHwxNjMxNjg3MzQ4&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop" class="group-hover:opacity-90 w-full" alt="..." width="600" height="450"/><div class="px-6 py-4">
                        <h4 class="font-bold text-xl">Sports Cars</h4>
                    </div></a> 
            </div>                         
        </div>
    </div>                 
</section>
  )
}
