import React from 'react'
import { useContext } from 'react'
import { SmileContext } from '../App'

export default function Header() {
  const smileContext = useContext(SmileContext)
  return (
    <div className='border-4 border-red-300'>header{SmileContext}</div>
  )
}
