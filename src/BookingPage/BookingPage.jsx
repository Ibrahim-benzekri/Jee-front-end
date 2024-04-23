import React, { useState,useEffect } from 'react'
import ReservationCar from '../Annonce/ReservationCar'
import Succes from '../Alert/Succes';
import Errors from '../Alert/Errors';
import { useNavigate, useParams } from 'react-router-dom';
export default function BookingPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [car,setcar] = useState({});
    const jwt = localStorage.getItem("customer_jwt");
    const [error,setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSucess, setShowSucess] = useState(false);
    const [booking,setBooking] = useState({
      pickUpDate:null,
      dropOffDate:null,
      adress:"",
      id:id
  });
    
    const fetchUser = async () => {
      try {
          const requestOptions = {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
          };
  
          const response = await fetch(`http://localhost:8081/api/v1/form/verify?token=${jwt}`, requestOptions);
          if (!response.ok) {
              const errorText = await response.text();
              throw new Error(errorText);
          }
          const data = await response.json();
          setBooking({
            ...booking,
            email:data.email
          });
      } catch (error) {
        setError("error here in fetching user.");
      }
  };
  
  
    const fetchCar = async () => {
        try {
          const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${jwt}`,
            },
          };
      
          const response = await fetch(`http://localhost:8081/api/v1/Car/${id}`, requestOptions);
      
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
          }
          
            const data = await response.json();
            setcar(data);
        } catch (error) {
            setError("error here in fetching the car");
        }
      };

      useEffect(()=>{
        fetchUser();
        fetchCar();
      },[]);

    
   
      const dateComparaison = (dateString1, dateString2)=> {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);
      
        if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
            return date1 < date2;
        } else {
          return false;
        }
      }
      useEffect(() => {
        if (error) {
          setShowError(true);
          const timer = setTimeout(() => {
            setShowError(false);
            setError("");
          }, 2000);
          return () => clearTimeout(timer);
        }
      }, [error]);

    const changement = (e)=>{
        setBooking({
            ...booking,
            [e.target.name] : e.target.value
        })
    }

    const validateForm = ()=>{
         if(booking.pickUpDate ===null){
            setError("pick-up date required");
        }else if(booking.dropOffDate ===null){
            setError("Drop-Off date required");
        }else if( dateComparaison(booking.dropOffDate,booking.pickUpDate)){
            setError("Drop-Off date should be after the pick-up date");
        }else if(booking.adress ===""){
            setError("Adress required");
        }else{
            return true;
        }
    }
    const sendData = async () => {
      
        try {
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              //Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(booking),
          };
      
          const response = await fetch("http://localhost:8081/api/v1/bookingRequest", requestOptions);
      
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
          }

        } catch (error) {
           setError("error while sending request");
        }
      };
    const sendReservation = ()=>{
        if(validateForm()){
            sendData();
            setShowSucess(true);
            setTimeout(() => setShowSucess(false), 2000);
            setTimeout(() => {
                navigate("/");
          }, 1000);
        }
    }
    
    return (
    <section class="bg-white ">
    <div class="container px-6 py-12 mx-auto">
        <div className='top-5 right-64 fixed'>
                {showSucess && <Succes text={"Successfully booked."}/>}
                {showError && <Errors text={error}/>}
        </div>
        <div>
            <p class="font-medium text-blue-500 ">Complete your reservation</p>

            <h1 class="mt-2 text-2xl font-normal text-gray-800  ">Please fill out this form and confirm your reservation</h1>


            
        </div>

        <div class="grid grid-cols-1 gap-12 mt-5 lg:grid-cols-2">
           
                <ReservationCar   title={car.title} imgUrl={car.imageUrl} description={car.description}
                price={car.price} reservationRate={car.reservationRate}/>
             
            <div class=" py-6 rounded-lg bg-gray-200 h-full  md:p-8">
                
                <div className='space-y-14'>
                     <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600 ">Pick-up date </label>
                            <input type="date" onChange={changement} name='pickUpDate'  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 ">Drop-off date</label>
                            <input type="date" onChange={changement} name='dropOffDate'  class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 ">Pick up address</label>
                        <input type="text" onChange={changement} name='adress' placeholder="Bd Zerktouni, Casablanca" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <button onClick={()=>{sendReservation()}} class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Confirm Reservation
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
