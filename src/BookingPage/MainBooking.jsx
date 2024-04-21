import React, { useEffect } from 'react'
import FilterBar from '../Bars/FilterBar'
import AnnonceCard from '../Annonce/AnnonceCard'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function MainBooking() {

  const { cat } = useParams();

const [filter,setFilter] = useState({
    category:cat? cat :"All Categories",
    price:"Default",
    reservation:"Default"
});

const [cars,setCars] = useState([]);

const fetchData = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(filter),
      };
  
      const response = await fetch("http://localhost:8081/api/v1/filterCars", requestOptions);
  
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
  },[filter]);


  return (
    <>
        <FilterBar filter={filter} setFilter={setFilter}/>
        <div className="-mx-3 flex flex-wrap justify-center px-3 ">
          {cars.map((car,index)=>(
             
              <AnnonceCard  key={index} title={car.title} imgUrl={car.imageUrl} description={car.description}
                price={car.price} reservationRate={car.reservationRate}/>
        
        ))}
          
        </div>
    </>
  )
}
