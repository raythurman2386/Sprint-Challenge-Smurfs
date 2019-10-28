import React from 'react'

const Smurf = ({ smurf }) => {
  return (
    <>
      <h4>{smurf.name}</h4>
      <p>{smurf.age} Years Old</p>
      <p>{smurf.height}</p>
    </>
  )
}

export default Smurf
