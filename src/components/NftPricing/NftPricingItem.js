import React from 'react'

const NftPricingItem = ({price, description}) => {
  return (
    <>
      <td>{price}</td>
      <td className='descrpition'>{description}</td>
    </>
  )
}

export default NftPricingItem