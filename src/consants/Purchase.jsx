import React from 'react'

const Purchase = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px] ${styles}`}>
        Purchase
    </button>
  )
}

export default Purchase