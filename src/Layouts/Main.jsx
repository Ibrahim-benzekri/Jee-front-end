import React from 'react'
import NavBar from '../Bars/NavBar'
import Landing from '../Home/Landing'
import Footer from '../Bars/Footer'
import Section2 from '../Home/Section2'
import TopCarsSection from '../Home/TopCarsSection'
import ByCategorySection from '../Home/ByCategorySection'

export default function Main() {
  return (
    <>
    

            <div className="min-h-screen flex flex-col">
                <header className="bg-gray-700 bg-opacity-95 py-2 sticky">
                    <NavBar/>
                </header>
                <main className="flex-1 ">
                    <Landing/>
                    <Section2/>
                    <TopCarsSection/>
                    <ByCategorySection/>
                </main>

                <footer className=" bg-opacity-95 ">
                    <Footer/>
                </footer>
            </div>


    </>
  )
}
