import React from 'react'

export default function ReservationCar({title,imgUrl,reservationRate,description,price}) {
  return (
  
    <div class="max-w-xl px-4 py-2 bg-slate-300 max-h rounded-lg shadow-md max-h-48 ">
        <div class="flex items-center justify-between">
            <span class="text-sm font-light text-gray-600 ">$<span>{price}</span>/day</span>
            <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">
                <div href="#" class="text-white " tabindex="0" role="link">{reservationRate} <span>reservation</span></div>
</a>
        </div>

        <div class="mt-2">
            <div href="#" class="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline" tabindex="0" role="link">{title}</div>
            <p class="mt-2 text-gray-600 ">{description}</p>
        </div>

</div>
  )
}
