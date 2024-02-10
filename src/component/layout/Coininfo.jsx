import React from 'react'
import { Flex,Typography } from 'antd'

const Coininfo = ({coin, withSymbol}) => {
  return (
    <Flex align='center'>
    <img src={coin.icon} alt={coin.name} style={{width:50}}/>
<Typography.Title level={2} style={{margin:0}}>
    {withSymbol && <span> ({coin.symbol}) </span>} {coin.name}
    </Typography.Title>
    </Flex>
  )
}
export default Coininfo