import React from 'react'

const Input = (props) => {
  return (
    <input style={{padding: 10, margin: 10, borderRadius: 5}} type="number
    " {...props} />
  )
}

export default Input