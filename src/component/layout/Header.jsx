import React, { useContext, useEffect, useState } from 'react'
import {Layout,Select,Space,Button,Modal,Drawer} from 'antd';
import CryptoContext from '../../context/crypto-context';
import CoinInfoModal from '../layout/CoinInfoModal'
import AddassetForm from './AddassetForm';

const headerStyle = {
    width: '100%',
    height: 70,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    background: 'blue'
  };

  const options = [
    {
      label: 'China',
      value: 'china',
      emoji: '🇨🇳',
      desc: 'China (中国)',
    },
    {
      label: 'USA',
      value: 'usa',
      emoji: '🇺🇸',
      desc: 'USA (美国)',
    },
    {
      label: 'Japan',
      value: 'japan',
      emoji: '🇯🇵',
      desc: 'Japan (日本)',
    },
    {
      label: 'Korea',
      value: 'korea',
      emoji: '🇰🇷',
      desc: 'Korea (韩国)',
    },
  ];


const Header = () => {
  const [select,setSelect] = useState(false)
  const [modal,setModal] = useState(false)
  const[coin,setCoin] = useState(null)
  const [drawer,setDrawer] = useState(false)
  const {crypto} = useCrypto()

  useEffect(() => {
    const keypress=(event) => {
      if (event.key === '/') {
        setSelect((prev)=!prev)
      }
    }
document.addEventListener('keypress',keypress)
    return  () => document.removeEventListener('keypresss',keypress)
  },[]) 

  function handleSelect(value) {
  setCoin(crypto.find((c)=> c.id === value))
    setModal(true)}

  return (
    <Layout.Header style={headerStyle}>
      <Select
    style={{
      width: 250,
    }}
    open={select}
    onSelect={handleSelect}
    onClick={()=> setSelect ((prev)=> !prev)}
   value='press / to open'
    options={crypto.map(coin => ({
      label:coin.name,
      value: coin.id,
      icon: coin.icon,
    }))}
    optionRender={(option) => (
      <Space>
        <img src={option.data.icon} style={{width: 25}} alt={option.data.label}/> {''} 
         {option.data.label}
      </Space>
    )}
  /> 
     <Button type="primary" onClick={() => setDrawer(true)}>Add Assets</Button>
     <Modal open={modal} onOk={() => setModal(false)} onCancel={()=> setModal(false)}>
       <CoinInfoModal coin={coin}/>
      </Modal>
      <Drawer width={550} title="Add Asset" onClose={() => setDrawer(false)} open={drawer} destroyOnClose>
      <AddassetForm onClose={() => setDrawer(false)}/>
      </Drawer>
    </Layout.Header>
  )}
export default Header


export function useCrypto() {
  return useContext(CryptoContext)
}