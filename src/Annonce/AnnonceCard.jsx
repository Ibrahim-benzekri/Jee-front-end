import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AnnonceCard({title,imgUrl,reservationRate,description,price,id}) {
 const navigate = useNavigate();
 return (
    <div class="p-3 w-full md:w-6/12 lg:w-4/12"> 
       <div class="bg-white border shadow-md text-gray-500 cursor-pointer" onClick={()=>{navigate(`/book/${id}`)}}> 
                                <div ><img src={imgUrl} class="hover:opacity-90 w-full" style={{  height: '400px' }}/></div>
                                <div class="p-6">
                                    <h4 class="font-bold mb-2 text-gray-900 text-xl"><div class="hover:text-gray-500">{title}</div></h4>
                                    <p class="mb-2 text-sm">{description}</p>
                                    <hr class="border-gray-200 my-4"/>
                                    <div class="flex items-center justify-between">
                                        <div class="inline-flex items-center py-1 space-x-1">
                                            <p>{reservationRate} <span className='pl-1'>reservation</span></p>
                                        </div>
                                        <p class="font-bold text-gray-900">$<span>{price}</span>/day</p>
                                    </div>
                                </div>                                 
                            </div> 
    </div>
  )
}
