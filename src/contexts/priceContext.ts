import React from 'react'

const PriceContext = React.createContext({
  data: {
    cro: 0,
    silver: 0,
    rib: 0,
    farms: []
  },
})

export default PriceContext
