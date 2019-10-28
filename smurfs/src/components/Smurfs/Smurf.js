import React from 'react'

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h4>{smurf.name}</h4>
      <p>{smurf.age} Years Old</p>
      <p>{smurf.height}</p>
    </div>
  )
}

export default Smurf
