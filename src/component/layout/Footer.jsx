import React from 'react'
import {Layout} from 'antd';

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'blue',
  };

const Footer = () => {
  return (
    <Layout.Footer style={footerStyle}>Все права защищены ©</Layout.Footer>
  )
}
export default Footer