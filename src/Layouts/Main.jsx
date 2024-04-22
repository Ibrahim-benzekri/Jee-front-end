import React, { useState } from 'react'
import NavBar from '../Bars/NavBar'
import Footer from '../Bars/Footer'
import MainHome from '../Home/MainHome'
import MainBooking from "../BookingPage/MainBooking";
export default function Main() {
  const [state,setState] = useState("home");
  return (
    <>
            <div className="min-h-screen flex flex-col">
                <header className="bg-gray-700 bg-opacity-95 py-2 sticky">
                    <NavBar setState={setState}/>
                </header>
                <main className="flex-1 ">
                  {state === "home" && (<MainHome/>)}
                  {state === "Cars" && (<MainBooking/>)}
                </main>

                <footer className=" bg-opacity-95 ">
                    <Footer/>
                </footer>
            </div>
    </>
  )
}
