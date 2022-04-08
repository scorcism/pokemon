import React from 'react'

function Card({ pika, imgUrl }) {
  let p = pika
  return (
    <>
      {p && <>
        <div className="grid-item">
          <p>{p.name}</p>
          <img src={imgUrl} alt={p.name} width="100px" height="100px" />
        </div>
      </>}
    </>
  )
}

export default Card