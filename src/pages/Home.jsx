import React from 'react'
import "./Home.css"
import Hero from "../components/Hero"
import Meals from "../components/Meals"
import CollectionLayout from "../components/collectionLayout/CollectionLayout"
import AttractionLayout from "../components/attractionLayout/AttractionLayout"
import EventLayout from "../components/eventLayout/EventLayout"
export default function Home() {
  return (
    <>
    <Hero /> 
    <EventLayout/>
    <Meals />
    <CollectionLayout />
    <AttractionLayout />
    </>
  )
}
