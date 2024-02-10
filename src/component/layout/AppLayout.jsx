import React from 'react'
import Header from '../layout/Header';
import Sider from '../layout/Sider';
import Footer from '../layout/Footer';
import Content from '../layout/Content';
import {Layout,Spin} from 'antd';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

const AppLayout = () => {
    const {loading}= useContext(CryptoContext)
    if (loading) {
        return <Spin fullscreen />} 
  return (
    <Layout>
    <Header/>
   <Layout>
    <Sider/>
    <Content/>
   </Layout>
 <Footer/>
 </Layout> 
  )}
export default AppLayout