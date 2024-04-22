import React from 'react'
import NavBar from '../Bars/NavBar'
import Footer from '../Bars/Footer'
import BookingPage from "../BookingPage/BookingPage";
export default function BookingLayout() {
  return (
  <>
    <div className="min-h-screen flex flex-col">
        <header className="bg-gray-700 bg-opacity-95 py-2 sticky">
            <NavBar/>
        </header>
        <main className="flex-1 ">
          <BookingPage/>
        </main>

        <footer className=" bg-opacity-95 ">
            <Footer/>
        </footer>
    </div>
</>
  )
}
