import React from 'react'
import {Layout} from 'antd';
import Typography from 'antd/es/typography/Typography';
import { useCrypto } from './Header';
import PartfolioChar from './PartfolioChar';
import AssetsTable from './AssetsTable';

const siderStyle = {
    textAlign: 'center',
    color: '#fff',
    justifyContent: 'space-between',
    padding: '1rem',
}

const Sider = () => {
  const {assets, crypto} = useCrypto()
  return (
    <Layout.Sider width="35%" style={siderStyle}>
      <Typography.Title level={3} style={{color:'red'}}>Portfolio:{' '}
      {assets
      .map((asset) => {
        const coin = crypto.find((c) => c.id === asset.id)
        return asset.amount * coin.price     
         }).reduce((acc,v) => (acc += v), 0).toFixed(2)} $
      </Typography.Title>
      <PartfolioChar/>
      <AssetsTable/>
    </Layout.Sider>
  )
}
export default Sider
