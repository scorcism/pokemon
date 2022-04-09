import React from 'react'
import { motion } from 'framer-motion'

function Card({ pika, imgUrl }) {
  let p = pika
  return (
    <>
      {p && <>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}

          className="grid-item">
          <p>{p.name}</p>
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={imgUrl} alt={p.name} width="100px" height="100px" />
        </motion.div>
      </>}
    </>
  )
}

export default Card