import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Attraction() {
    const {id} = useParams()
    const obj  = useOutletContext()
  return (
    <div>{id} {obj}</div>
  )
}