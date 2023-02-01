import React from 'react'
import { useParams } from 'react-router-dom'
import "./Collection.css"
export default function Collection() {
    const {id} = useParams()
  return (
    <div className='collectionInCollections'>
      <p>{id}</p>
    </div>
  )
}
