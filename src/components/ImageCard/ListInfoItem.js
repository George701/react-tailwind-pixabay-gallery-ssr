import React from 'react'

const ListInfoItem = ({ label, value }) => {
  return (
    <li>
      <strong>{`${label}: `}</strong>
      {value}
    </li>
  )
}

export default ListInfoItem
