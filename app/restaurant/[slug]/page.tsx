import Navbar from '@/app/components/Navbar'
import React from 'react'
import Header from './components/Header'
import RestaurantNavBar from './components/RestaurantNavBar'
import Tittle from './components/Tittle'
import Rating from './components/Rating'
import Description from './components/Description'
import Images from './components/Images'
import Reviews from './components/Reviews'
import ReservationCards from './components/ReservationCards'

function RestaurantDetails() {
  return (
<>
    {/* NAVBAR */} 
    {/* HEADER */}
    <Header/>
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar/>
        {/* RESAURANT NAVBAR */} {/* TITLE */}
        <Tittle/>
        {/* TITLE */} {/* RATING */}
        <Rating/>
        {/* RATING */} {/* DESCRIPTION */}
        <Description/>
        {/* DESCRIPTION */} {/* IMAGES */}
        <Images/>
        {/* IMAGES */} {/* REVIEWS */}
        <Reviews/>
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCards/>
      </div>
    </div>
    {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
    CARD PORTION */}
</>

  )
}

export default RestaurantDetails