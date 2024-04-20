import React from 'react'
import { useState } from 'react';
export default function FilterBar({filter,setFilter}) {
    

    const filterChange = (e) => {
        setFilter({
          ...filter,
          [e.target.name]: e.target.value,
        });
        
      }
    const category = [
        "All Categories",
        "Sedans",
        "SUV",
        "Convertibles",
        "Sport Cars"
    ];
  return (    
  <>
    <header  className=" py-5 bg-gray-200 :text-gray-100  z-9 top-6  ">
    <div className="container flex flex-wrap h-2 mb-4">
    <div class="w-1/3 mb-4 px-2">
        <select
          name='category'
          className="w-full rounded-lg border-gray-200  p-2 bg-white shadow-sm text-black"
          value={filter.category}
          onChange={filterChange}
        >
          {category.map((option, index) => (
            <option key={index} value={option} className={index===0 ? "text-slate-800" : ""} >{option}</option>
          ))}
        </select>
    </div>

          <div class="w-1/3 mb-4 px-2">
          <select
          name='price'
          className="w-full rounded-lg border-gray-200  p-2 bg-white shadow-sm text-black"
          value={filter.price}
          onChange={filterChange}
        >
          <option value="Default"  className="text-slate-800">
            Default
          </option>
          <option value="Low-High">Low-High</option>
          <option value="High-Low">High-Low</option>
        </select>
          </div>

          <div class="w-1/3 mb-4 px-2">
          <select
          name='reservation'
          className="w-full rounded-lg border-gray-200  p-2 bg-white shadow-sm text-black"
          value={filter.reservation}
          onChange={filterChange}
        >
          <option value="Default"  className="text-slate-800">
            Default
          </option>
          <option value="Most reserved">Most reserved</option>
          <option value="Least reserved">Least reserved</option>
        </select>
          </div>
    </div>

  </header>
</>
  )
}
