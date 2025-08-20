import React from 'react'

export default function Button({children, value}) {
  return (
    <button className='bg-red-400'>{children} <br />{value}</button>
  )
}
