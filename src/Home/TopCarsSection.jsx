import React, { useEffect, useState } from 'react'
import AnnonceCard from '../Annonce/AnnonceCard'

export default function TopCarsSection() {
    const [cars,setCars] = useState([]);
    const fetchData = async () => {
        try {
          const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${jwt}`,
            }
          };
      
          const response = await fetch("http://localhost:8081/api/v1/topCars", requestOptions);
      
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
          }
      
          const data = await response.json();
          setCars(data);
        } catch (error) {
        }
      };
      useEffect(()=>{
        fetchData();
      });
  return (
    <>
    <section class="bg-gray-50 py-10"> 
                <div class="container mx-auto px-4"> 
                    <div class="-mx-4 flex flex-wrap items-center mb-6"> 
                        <div class="px-4 w-full md:w-10/12"> 
                            <h2 class="font-medium mb-1 text-primary-500 text-xl">Our Top Cars</h2>
                            <h3 class="capitalize font-bold mb-4 text-4xl text-gray-900">Cars for all your needs</h3>
                            <div class="bg-primary-500 mb-6 pb-1 w-2/12"></div>                             
                        </div>                         
                    </div>
                    <div class="-mx-3 flex flex-wrap justify-center "> 
                    {cars.map((car,index)=>(
                        <AnnonceCard key={index} title={car.title} imgUrl={car.imageUrl} description={car.description}
                        price={car.price} reservationRate={car.reservationRate}/>
                    ))}         
                    </div>
                    <div class="text-center">
                        <a href="#" class="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white">View All Cars</a>
                    </div>
                </div>                 
            </section>
    </>
  )
}
